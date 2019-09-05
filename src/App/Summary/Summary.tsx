import React from "react";
import { Panel } from "components/ui";
import styles from "./Summary.module.scss";

const Content = ({ className }: any) => (
  <div className={className}>
    <Panel>
      <Panel.Section theme="dark">Sending Details</Panel.Section>
      <Panel.Section>You send....</Panel.Section>
      <Panel.Section theme="dark">Receiving Details</Panel.Section>
      <Panel.Section>Rate...</Panel.Section>
      <Panel.Section className={styles.footer}>
        You save £66.19 compared to your bank!
      </Panel.Section>
    </Panel>
  </div>
);

export { Content };
