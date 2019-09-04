import React from "react";
import classNames from "classnames";
import { useWindowScrollPosition } from "components/hooks";
import styles from "./Header.module.scss";
import logo from "./cf_logo.svg";

const Header = (props: any) => {
  const { className } = props;
  const { positionY } = useWindowScrollPosition();
  const isSmall = positionY > 60;

  return (
    <header
      className={classNames(
        styles.header,
        isSmall && styles.header__small,
        className
      )}
    >
      <div className={styles.header_content}>
        <img className={styles.header_logo} src={logo} alt="CurrencyFair" />
      </div>
    </header>
  );
};

export { Header };
