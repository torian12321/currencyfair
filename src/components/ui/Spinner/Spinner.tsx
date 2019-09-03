import React from "react";
import classNames from 'classnames';
import { ISpinner } from "./Spinner.interfaces";
import styles from './Spinner.module.scss';

const Spinner = (props: ISpinner) => {
  const { className, size } = props;

  return (
    <div className={classNames(
      styles.spinner,
      styles[`spinner__${size}`],
      className
    )}>
      <svg viewBox="0 0 66 66">
        <circle cx="33" cy="33" r="30" />
      </svg>
    </div>
  );
};

export { Spinner };
