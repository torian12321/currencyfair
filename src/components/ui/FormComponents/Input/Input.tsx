import React from "react";
import classNames from "classnames";
// import { IInput } from "./Input.interfaces";
import { useForm } from "../Form";
import styles from "./Input.module.scss";

const Input = (props: any) => {
  const { name, onChange, className, type = "text", ...rest } = props;
  const { getValue, setValue } = useForm();

  const value = getValue(name);

  const handleChange = (e: any) => {
    const val = e.target.value;

    setValue(name, val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type={type}
      className={classNames(styles.input, className)}
      {...rest}
    />
  );
};

export { Input };
