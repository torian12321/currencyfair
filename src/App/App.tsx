import React from "react";
import { Button, Spinner, useModal, Link } from "components/ui";
import { Header } from "./Header";
import { Summary } from "./Summary";
import styles from "./App.module.scss";
import Lorem from "./Lorem";

const App: React.FC = () => {
  const { Modal, showModal } = useModal();

  return (
    <>
      <Modal>I have some custom content</Modal>

      <div className={styles.App}>
        <Header className={styles.header} />
        <div className={styles.main}>
          <Spinner />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Button.Group>
            <Button caption="Next" onClick={showModal} />
            <Button caption="Outline" outline />
          </Button.Group>
          <Button caption="Disabled" disabled />
          <Button caption="Loading" loading />
          <Link caption="Go somewhere" href="bla bla" />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem />
          <Lorem /> <Lorem /> <Lorem /> <Lorem /> <Lorem />
          <Button caption="Outline" outline />
        </div>

        <Summary className={styles.aside} />
      </div>
    </>
  );
};

export { App };
