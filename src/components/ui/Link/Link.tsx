import React from "react";
import classNames from "classnames";
import { ILink } from "./Link.interfaces";
import styles from "./Link.module.scss";

const Link = (props: ILink) => {
  const { caption, to, className, target = "_blank", rel } = props;

  return (
    <a
      href={to}
      target={target}
      rel={rel}
      className={classNames(styles.link, className)}
    >
      {caption}
    </a>
  );
};

export { Link };
