import React, { useState } from "react";
import { Modal } from "./Modal";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hiddeModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);

  return {
    Modal: () => (isVisible ? <Modal onDismiss={hiddeModal} /> : null),
    showModal,
    hiddeModal
  };
};

export { useModal };
