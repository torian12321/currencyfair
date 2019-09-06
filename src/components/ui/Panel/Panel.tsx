import React from "react";
import classNames from "classnames";
import { IPanel, IPanelSection } from "./Panel.interfaces";
import styles from "./Panel.module.scss";

const Panel = ({ children, className }: IPanel) => (
  <section className={classNames(styles.panel, className)}>{children}</section>
);

const PanelSection = ({
  children,
  theme,
  className,
  highlight = false
}: IPanelSection) => (
  <div
    className={classNames(
      styles.section,
      theme && styles[`section__theme_${theme}`],
      highlight && styles.section__highlight,
      className
    )}
  >
    {children}
  </div>
);

Panel.Section = PanelSection;

export { Panel };
