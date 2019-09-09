import React from "react";
import { DemoIn } from "./DemoIn";
import { Form } from "components/ui";

// General layout distribution
const App: React.FC = () => {
  const test = () => {
    console.log("AAAA");
  };
  return (
    <div>
      <Form
        onSubmit={test}
        initialValues={{
          field_01: "",
          field_02: "",
          field_03: "",
          field_04: ""
        }}
      >
        <DemoIn />
      </Form>
    </div>
  );
};

export default App;
export { App };
