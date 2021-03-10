import React from "react";
import styles from "./${name}.module.scss";

const ${name} = (props) => {
    return (
      <div className={styles.${name.toLowerCase()}}>
        ${name}
      </div>
    );
};

${name}.propTypes = {};

export default ${name};
