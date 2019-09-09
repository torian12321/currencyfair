import React, { useState, useEffect } from "react";
import {
  Modal,
  Icon,
  Heading,
  Button,
  Link,
  Input,
  LabelPhone,
  useForm
} from "components/ui";
// import { FieldsCode } from "./ModalVerificationForm";
import { F_01, F_02, F_03, F_04, F_05, F_06 } from "./constants";
import styles from "./ModalVerification.module.scss";

const FormOption = ({ caption, iconName }: any) => (
  <span className={styles.formOptions_option}>
    <Icon name={iconName} className={styles.formOptions_icon} /> {caption}
  </span>
);

const ModalVerification = (props: any) => {
  const { closeModal, isVisible, isLoading } = props;
  const { submit, values } = useForm();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      // Check than all fields had a value
      !!values[F_01] &&
        !!values[F_02] &&
        !!values[F_03] &&
        !!values[F_04] &&
        !!values[F_05] &&
        !!values[F_06]
    );
  }, [values]);

  return (
    <Modal className={styles.modal} isVisible={isVisible}>
      <Modal.Header>
        <span>
          <Icon name="lock" className={styles.header_icon} />
          <Heading
            className={styles.header_title}
            level={5}
            caption="Identity veriﬁcation required"
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
        <div>
          <Input name={F_01} maxLength={1} />
          <Input name={F_02} maxLength={1} />
          <Input name={F_03} maxLength={1} />
          <Input name={F_04} maxLength={1} />
          <Input name={F_05} maxLength={1} />
          <Input name={F_06} maxLength={1} />
        </div>
        <div className={styles.formOptions}>
          <FormOption iconName="redo" caption="Receive a new code" />
          <FormOption
            iconName="phone"
            caption="Receive code via call instead"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button.Group>
          <Button
            caption="Verify Identity"
            disabled={!isValid}
            loading={isLoading}
            onClick={submit}
          />
          <Button outline caption="Back" onClick={closeModal} />
        </Button.Group>
        <Link
          className={styles.footer_link}
          caption="I can’t access this mobile deviceBack"
          href="#"
        />
      </Modal.Footer>
    </Modal>
  );
};

export { ModalVerification };
