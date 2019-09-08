import React from "react";
import classNames from "classnames";
import { ILabelPhone } from "./LabelPhone.interfaces";
import styles from "./LabelPhone.module.scss";

const LabelPhone = (props: ILabelPhone) => {
  const { number, className } = props;

  return number ? (
    <div
      aria-label={`Phone: ${number}`}
      className={classNames(styles.container, className)}
    >
      <span className={styles.prefix}>+353</span>
      <span className={styles.number}>{number}</span>
    </div>
  ) : null;
};

export { LabelPhone };
