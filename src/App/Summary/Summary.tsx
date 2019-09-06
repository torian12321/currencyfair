import React from "react";
import classNames from "classnames";
import { Panel, Link } from "components/ui";
import { IPropValue } from "./Summary.interfaces";
import styles from "./Summary.module.scss";

const PropValue = ({ prop, val, important = false }: IPropValue) => (
  <div
    className={classNames(
      styles.propValue,
      important && styles.propValue__important
    )}
  >
    <span className={styles.propValue_p}>{prop}</span>
    <span className={styles.propValue_v}>{val}</span>
  </div>
);

const Content = ({ className }: any) => (
  <div className={className}>
    <Panel>
      <Panel.Section theme="dark">Sending Details</Panel.Section>
      <Panel.Section>
        <PropValue prop="You send" val="€2000.00" important />
      </Panel.Section>
      <Panel.Section theme="dark">
        <PropValue
          prop="Receiving Details"
          val={
            <Link
              className={styles.link}
              caption="As of right now"
              href="https://www.currencyfair.com"
            />
          }
        />
      </Panel.Section>
      <Panel.Section>
        <PropValue prop="Rate" val="0.86022" />
        <PropValue prop="Fee" val="£2.50" />
        <PropValue prop="Delivery date" val="25th November" />
        <PropValue prop="Recipient gets" val="£1717.94" important />
      </Panel.Section>
      <Panel.Section className={styles.footer}>
        You save £66.19 compared to your bank!
      </Panel.Section>
    </Panel>
  </div>
);

export { Content };
