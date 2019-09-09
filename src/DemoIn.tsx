import React, { useEffect, useState } from "react";
import { Button, Input, useForm } from "components/ui";
import { F_01, F_02, F_03, F_04 } from "./constants";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const DemoIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { submit, values } = useForm();

  useEffect(() => {
    setIsValid(
      // Check than all fields had a value
      !!values[F_01] && !!values[F_02] && !!values[F_03] && !!values[F_04]
    );
  }, [values]);

  const handleClick = async () => {
    // Mock an API call
    setIsLoading(true);
    await sleep(1000);
    setIsLoading(false);
    submit();
  };

  return (
    <div>
      <Input name={F_01} />
      <Input name={F_02} maxLength={2} />
      <Input name={F_03} />
      <Input name={F_04} />
      <Button
        caption="ABC"
        onClick={handleClick}
        disabled={!isValid}
        loading={isLoading}
      />
    </div>
  );
};

export default DemoIn;
export { DemoIn };
