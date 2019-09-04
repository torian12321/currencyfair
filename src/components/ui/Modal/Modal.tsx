import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useKeyPress } from "components/hooks";
import { IModal } from "./Modal.interfaces";
import styles from "./Modal.module.scss";

const KEY_ESC = 27;

const Modal = (props: IModal) => {
  const { children, onDismiss = () => {} } = props;
  const escIsPressed = useKeyPress(KEY_ESC);

  useEffect(() => {
    // When on screen, block the page scroll
    document.body.classList.add(styles.body_hasModal);

    return () => {
      document.body.classList.remove(styles.body_hasModal);
    };
  }, []);

  useEffect(() => {
    // Remove the Modal from the screen when ESC is pressed
    escIsPressed && closeModal();
  }, [escIsPressed]);

  const closeModal = () => {
    onDismiss();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal_BG} />
      <div className={styles.modal}>
        <div onClick={closeModal}>close me</div>
        {children}
      </div>
    </>,
    document.body
  );
};

export { Modal };
