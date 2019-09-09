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
import { fieldNames } from "./constants";
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
      !fieldNames.find(fn => !values[fn])
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
        <div className={styles.content}>
          <strong>Enter the code sent via SMS to</strong>
          <LabelPhone number="872251177" className={styles.content_phone} />
          <div className={styles.code}>
            {fieldNames.map(fn => (
              <Input
                name={fn}
                maxLength={1}
                key={fn}
                className={styles.code_field}
              />
            ))}
          </div>
          <div className={styles.formOptions}>
            <FormOption iconName="redo" caption="Receive a new code" />
            <FormOption
              iconName="phone"
              caption="Receive code via call instead"
            />
          </div>
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
