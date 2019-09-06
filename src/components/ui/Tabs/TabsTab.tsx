import React from "react";
import classNames from "classnames";
import { ITab } from "./Tabs.interfaces";
import styles from "./Tabs.module.scss";

const Tab = (props: ITab) => {
  const {
    onClick,
    id,
    label = id,
    step,
    className,
    disabled = false,
    isActiveTab = false
  } = props;

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      disabled={disabled}
      className={classNames(
        styles.labelItem,
        isActiveTab && styles[`labelItem__active`],
        className
      )}
    >
      <span className={styles.labelItem_step}>Step {step}</span>
      {label}
    </button>
  );
};

export { Tab };
