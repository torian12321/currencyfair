import React from "react";
import { DemoIn } from "./DemoIn";
import { Form } from "components/ui";
import { F_01, F_02, F_03, F_04 } from "./constants";

// General layout distribution
const App: React.FC = () => {
  const test = (val: any) => {
    console.log("AAAA", val);
  };
  return (
    <div>
      <Form
        onSubmit={test}
        initialValues={{
          [F_01]: "",
          [F_02]: "",
          [F_03]: "",
          [F_04]: ""
        }}
      >
        <DemoIn />
      </Form>
    </div>
  );
};

export default App;
export { App };
