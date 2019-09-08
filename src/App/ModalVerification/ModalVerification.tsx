import React from "react";
import { Modal, Heading, Button, Link, LabelPhone } from "components/ui";
import styles from "./ModalVerification.module.scss";

const ModalVerification = () => (
  <Modal className={styles.modal} isVisible={true}>
    <Modal.Header>
      <span>
        <i className={`fas fa-lock ${styles.header_icon}`} />
        <Heading
          className={styles.header_title}
          level={5}
          caption="Identity v/eriﬁcation required"
        />
      </span>
      <span className={styles.header_subtitle}>
        For your security, we ocassionally require you to verify your identity
        by entering a code sent to your mobile device.
      </span>
    </Modal.Header>
    <Modal.Body>
      <i className="fas fa-phone" />
      <i className="fas fa-redo-alt" />
      I am the body <LabelPhone number="872251177" />
    </Modal.Body>
    <Modal.Footer>
      <Button.Group>
        <Button caption="Verify Identity" disabled />
        <Button caption="Back" />
      </Button.Group>
      <Link
        className={styles.footer_link}
        caption="I can’t access this mobile deviceBack"
        href="#"
      />
    </Modal.Footer>
  </Modal>
);

export { ModalVerification };
