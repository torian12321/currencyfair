import React from "react";
import { Link } from "components/ui";
import styles from "./Main.module.scss";

const MainFooter = () => (
  <div className={styles.footer}>
    Ⓒ2016 CurrencyFair
    <div className={styles.footer_links}>
      <Link
        caption="Help & Support"
        href="https://www.currencyfair.com"
        className={styles.footer_linkItem}
      />
      <Link
        caption="Legal Stuff"
        href="https://www.currencyfair.com"
        className={styles.footer_linkItem}
      />
    </div>
  </div>
);

export { MainFooter };
