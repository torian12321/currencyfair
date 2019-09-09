import React, { useState } from "react";
import { Form } from "components/ui";
import { ModalVerification as Content } from "./ModalVerification";
import { fieldNames, F_01, F_02, F_03, F_04, F_05, F_06 } from "./constants";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ModalVerification = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (val: any) => {
    // Mock an API call delay
    setIsLoading(true);
    await sleep(2000);
    setIsLoading(false);

    const code = fieldNames.map(fn => val[fn]);
    alert(`Code: ${code.join("-")}`);
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      initialValues={{
        [F_01]: "",
        [F_02]: "",
        [F_03]: "",
        [F_04]: "",
        [F_05]: "",
        [F_06]: ""
      }}
    >
      <Content isLoading={isLoading} {...props} />
    </Form>
  );
};

export { ModalVerification };
