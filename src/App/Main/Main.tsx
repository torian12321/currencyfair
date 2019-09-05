import React from "react";
import { Heading, Button, useModal, Link, CurrencyBadget } from "components/ui";
import styles from "./Main.module.scss";
import Lorem from "./Lorem";

const Main = (props: any) => {
  const { className } = props;
  const { Modal, showModal } = useModal();

  return (
    <div className={className}>
      <Modal>I have some custom content</Modal>
      <div>
        <Heading level={4} caption="Let’s set up your transaction! " />
        <CurrencyBadget currency="euro" />
        <CurrencyBadget currency="gbp" />
        <Button.Group>
          <Button caption="Next" onClick={showModal} />
          <Button caption="Outline" outline />
        </Button.Group>
        <Button caption="Disabled" disabled />
        <Button caption="Loading" loading />
        <Link caption="Go somewhere" href="bla bla" />
        {/* <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem /> <Lorem /> <Lorem /> <Lorem /> <Lorem /> */}
        <Button caption="Outline" outline />
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
      </div>
    </div>
  );
};

export { Main };
