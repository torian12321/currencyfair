import React from "react";
import { Modal, Icon, Heading, Button, Link, LabelPhone } from "components/ui";
import styles from "./ModalVerification.module.scss";

const ModalVerification = () => (
  <Modal className={styles.modal} isVisible={true}>
    <Modal.Header>
      <span>
        <Icon name="lock" />
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
      <strong>Enter the code sent via SMS to</strong>
      <LabelPhone number="872251177" />
      <div>fields</div>
      <div className={styles.formOptions}>
        <span className={styles.formOptions_option}>
          <Icon name="redo" />
          Receive a new code
        </span>
        <span className={styles.formOptions_option}>
          <Icon name="phone" />
          Receive code via call instead
        </span>
      </div>
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
