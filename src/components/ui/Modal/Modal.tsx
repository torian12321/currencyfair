import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useEventListener, useKeyPress } from "components/hooks";
// import classNames from 'classnames';
// import { ISpinner } from "./Spinner.interfaces";
// import styles from './Spinner.module.scss';

const KEY_ESC = 27;

const Modal = () => {
  const escIsPressed = useKeyPress(KEY_ESC);
  const onKeyDown = ({ keyCode }: any) => {
    // const { isVisible } = props;
    if (keyCode === KEY_ESC) {
      console.log("close this");
    }
  };

  useEffect(() => {
    console.log("We are pressing scape");
  }, [escIsPressed]);

  useEventListener("keydown", onKeyDown, document);

  return ReactDOM.createPortal(
    <div>ABC {escIsPressed ? "AAA" : "BBB"} </div>,
    document.body
  );
};

export { Modal };
