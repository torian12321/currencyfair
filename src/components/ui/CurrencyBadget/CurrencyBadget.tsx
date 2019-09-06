import React from "react";
import classNames from "classnames";
import { ICurrencyBadget, TCurrency } from "./CurrencyBadget.interfaces";
import styles from "./CurrencyBadget.module.scss";
import currendcyInfo from "./currencyInfo.json";

const getCurrendcyInfo = (c: TCurrency) => currendcyInfo[c] || {};

const CurrencyBadget = (props: ICurrencyBadget) => {
  const { currency, className } = props;
  const { shortName, id } = getCurrendcyInfo(currency);

  return (
    <div
      className={classNames(
        styles.badget,
        styles[`badget__lang_${id}`],
        className
      )}
    >
      <div className={classNames(styles.icon, styles[`icon__${id}`])} />
      <span className={classNames(styles.text)}>{shortName}</span>
    </div>
  );
};

export { CurrencyBadget };
