import React from "react";
import { Button, useModal, Link } from "components/ui";
// import styles from "./App.module.scss";
import Lorem from "./Lorem";

const Main = (props: any) => {
  const { className } = props;
  const { Modal, showModal } = useModal();

  return (
    <div className={className}>
      <Modal>I have some custom content</Modal>
      <div>
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
    </div>
  );
};

export { Main };
