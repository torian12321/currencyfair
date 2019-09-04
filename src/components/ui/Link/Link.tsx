import React from "react";
import classNames from "classnames";
import { ILink } from "./Link.interfaces";
import styles from "./Link.module.scss";

const Link = (props: ILink) => {
  const { caption, href, className, target = "_blank", rel } = props;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={classNames(styles.link, className)}
    >
      {caption}
    </a>
  );
};

export { Link };
