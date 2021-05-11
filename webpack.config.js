const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (env) => {
    const envConfig = !env.mode
        ? require("./webpack-build-utils/webpack.development")
        : require(`./webpack-build-utils/webpack.${env.mode}`);

    // return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
    // return mergeWithCustomize({ mode: env.mode }, commonConfig, envConfig);
    return merge({ mode: env.mode }, commonConfig, envConfig);
};
