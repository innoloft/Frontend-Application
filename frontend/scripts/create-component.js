const fs = require("fs");
const path = require("path");

const DEFAULT_TARGET_PATH = "src/components";

const DEFAULT_TEMPLATES_PATH = "component-templates";

const EXTENDED_INFO = `
Create a React component scaffolding composed by a directory and all the component
specific files generated from the templates. You can find the templates in the
${DEFAULT_TEMPLATES_PATH} subdir of the one containing this script.

The component will be created in the directory: <project-root-dir>/${DEFAULT_TARGET_PATH}
`;

/* eslint-disable no-console */

const evalTemplate = (filename, vars) => {
  // Template strings have a limitation: both the template and the placeholders
  // must exist before evaluating the string and replace the placeholders with
  // their actual value.
  // To specify dynamically the placeholders we can simply wrap the template
  // string in a function, but in this case also the template itself needs to be
  // dynamic as it is loaded from a file.
  // To overcome this limitation we need to create at runtime a function using
  // the function constructor so that the template string is there and then
  // wrap this function with another one which specify the placeholders.

  return (template => {
    const templateFn = new Function(
      ...Object.keys(vars),
      `return \`${template}\`;`
    );
    return templateFn(...Object.values(vars));
  })(fs.readFileSync(filename));
};

const createFiles = async (path, name, templatesDir) => {
  const templates = fs.readdirSync(templatesDir);

  for (const template of templates) {
    const fileName = template.replace("$name", name);

    if (fs.existsSync(`${path}/${name}/${fileName}`)) {
      console.log(`File "${fileName}" already exists, skipping.`);
      continue;
    }

    const data = evalTemplate(`${templatesDir}/${template}`, { name });
    fs.writeFile(`${path}/${name}/${fileName}`, data, err => {
      if (err) {
        console.warn(`Cannot create ${fileName}!`);
      } else {
        console.log(`File "${fileName}" created`);
      }
    });
  }
};

const warnAndExit = (...msg) => {
  console.warn(...msg);
  process.exit(0);
};

const main = () => {
  const targetPath = path.normalize(`${__dirname}/../${DEFAULT_TARGET_PATH}`);

  if (process.argv.length !== 3) {
    console.log(
      `Usage: ${path.basename(__filename)} <ComponentName>\n${EXTENDED_INFO}`
    );
    process.exit(0);
  }

  let stats;
  try {
    stats = fs.statSync(targetPath);
  } catch (err) {
    warnAndExit(`Given path "${DEFAULT_TARGET_PATH}" does not exists.`);
  }

  if (!stats.isDirectory()) {
    warnAndExit(`Given path "${DEFAULT_TARGET_PATH}" is not a directory.`);
  }

  const componentName = process.argv[2];

  try {
    fs.mkdirSync(`${targetPath}/${componentName}`, { recursive: true });
  } catch (err) {
    warnAndExit(
      `Cannot create the directory "${targetPath}/${componentName}".`
    );
  }

  createFiles(
    targetPath,
    componentName,
    `${__dirname}/${DEFAULT_TEMPLATES_PATH}`
  );
};

main();
