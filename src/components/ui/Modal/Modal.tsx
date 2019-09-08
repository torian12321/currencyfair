import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { useKeyPress } from "components/hooks";
import { IModal } from "./Modal.interfaces";
import styles from "./Modal.module.scss";

const KEY_ESC = 27;

const Modal = (props: IModal) => {
  const {
    children,
    className,
    isVisible = false,
    onDismiss = () => {}
  } = props;
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
        <div className={classNames(styles.wrapper, className)}>
          <div className={styles.modal_BG} />
          <div className={styles.modal}>{children}</div>
        </div>,
        _dBody
      )
    : null;
};

const Header = ({ children, className }: any) => (
  <div className={classNames(styles.header, className)}>{children}</div>
);
const Body = ({ children, className }: any) => (
  <div className={classNames(styles.body, className)}>{children}</div>
);
const Footer = ({ children, className }: any) => (
  <div className={classNames(styles.footer, className)}>{children}</div>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
