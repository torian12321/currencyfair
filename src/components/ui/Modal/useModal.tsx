import React, { useState } from "react";
import { Modal } from "./Modal";
import { IModal } from "./Modal.interfaces";

/**
 * Hook returning <Modal /> component and its controllers
 *
 */

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hiddeModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);

  return {
    Modal: (props: IModal) =>
      isVisible ? <Modal onDismiss={hiddeModal} {...props} /> : null,
    showModal,
    hiddeModal
  };
};

export { useModal };
