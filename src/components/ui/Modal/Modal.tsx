import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useKeyPress } from "components/hooks";
import { IModal } from "./Modal.interfaces";
import styles from "./Modal.module.scss";

const KEY_ESC = 27;

const Modal = (props: IModal) => {
  const { children, isVisible = false, onDismiss = () => {} } = props;
  const escIsPressed = useKeyPress(KEY_ESC);
  const { body: _dBody } = document;

  useEffect(() => {
    // When on screen, block the page scroll
    _dBody.classList.add(styles.body_hasModal);

    return () => {
      _dBody.classList.remove(styles.body_hasModal);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      _dBody.classList.add(styles.body_hasModal);
    } else {
      _dBody.classList.remove(styles.body_hasModal);
    }
  }, [isVisible]);

  useEffect(() => {
    // Remove the Modal from the screen when ESC is pressed
    if (isVisible && escIsPressed) {
      closeModal();
    }
  }, [escIsPressed]);

  const closeModal = () => {
    onDismiss();
  };

  return isVisible
    ? ReactDOM.createPortal(
        <>
          <div className={styles.modal_BG} />
          <div className={styles.modal}>
            <div onClick={closeModal}>close me</div>
            {children}
          </div>
        </>,
        _dBody
      )
    : null;
};

export { Modal };
