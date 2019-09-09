import React from "react";
import classNames from "classnames";
// import { IInput } from "./Input.interfaces";
import styles from "./Input.module.scss";

const Input = (props: any) => {
  const { className, type = "text", ...rest } = props;

  return (
    <input
      type={type}
      className={classNames(styles.input, className)}
      {...rest}
    />
  );
};

export { Input };
