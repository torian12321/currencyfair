import React from "react";
import classNames from "classnames";
import { useWindowScrollPosition } from "components/hooks";
// import logo from "./logo.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { positionY } = useWindowScrollPosition();
  const isSmall = positionY > 100;

  return (
    <header
      className={classNames(styles.header, isSmall && styles.header__small)}
    >
      The logo goes here - {positionY}
    </header>
  );
};

export { Header };
