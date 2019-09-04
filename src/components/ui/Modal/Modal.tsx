import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useKeyPress } from "components/hooks";
// import classNames from 'classnames';
// import { ISpinner } from "./Spinner.interfaces";
import styles from "./Modal.module.scss";

const KEY_ESC = 27;

const Modal = (props: any) => {
  const { onDismiss = () => {} } = props;
  const [isVisible, setIsVisible] = useState(true);

  const escIsPressed = useKeyPress(KEY_ESC);

  useEffect(() => {
    bodyAddClassName();

    return () => {
      bodyDelClassName();
    };
  }, []);

  const bodyAddClassName = () =>
    document.body.classList.add(styles.body_hasModal);
  const bodyDelClassName = () =>
    document.body.classList.remove(styles.body_hasModal);

  useEffect(() => {
    if (isVisible) {
      bodyAddClassName();
    } else {
      bodyDelClassName();
    }
  }, [isVisible]);

  useEffect(() => {
    escIsPressed && closeModal();
  }, [escIsPressed]);

  const closeModal = () => {
    if (isVisible) {
      onDismiss();
      setIsVisible(false);
    }
  };

  return ReactDOM.createPortal(
    isVisible && (
      // !escIsPressed && (
      <>
        <div className={styles.modal_BG} />
        <div className={styles.modal}>
          <div onClick={closeModal}>close me</div>
        </div>
      </>
    ),
    document.body
  );
};

export { Modal };
