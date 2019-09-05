import React from "react";
import classNames from "classnames";
import { ICurrencyBadget } from "./CurrencyBadget.interfaces";
import styles from "./CurrencyBadget.module.scss";

const currendcyInfo = {
  euro: {
    id: "eur",
    symbol: "€",
    name: "Euro",
    shortName: "EUR"
  },
  gbp: {
    id: "gbp",
    symbol: "£",
    name: "Po",
    shortName: "GBP"
  }
};
const CurrencyBadget = (props: ICurrencyBadget) => {
  const { currency, className } = props;

  return (
    <div className={className}>
      <div className={classNames(styles.badget, className)}>
        <div className={styles.icon} />
        <span className={classNames(styles.text)}>
          {currendcyInfo[currency].shortName}
        </span>
      </div>
    </div>
  );
};

export { CurrencyBadget };
