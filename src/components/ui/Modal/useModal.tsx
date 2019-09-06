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
    Modal: (props: IModal) => (
      <Modal onDismiss={hiddeModal} isVisible={isVisible} {...props} />
    ),
    showModal,
    hiddeModal
  };
};

export { useModal };
