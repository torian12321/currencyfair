import React from "react";
import classNames from "classnames";
import { IIcon } from "./Icon.interfaces";
import styles from "./Icon.module.scss";

const Icon = (props: IIcon) => {
  const { name, className } = props;

  return <i className={classNames(styles.icon, `fas fa-${name}`, className)} />;
};

export { Icon };
