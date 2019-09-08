import React from "react";
import { IForm } from "./Form.interfaces";

const Form = (props: IForm) => {
  const { children, onSubmit = () => null, className } = props;

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export { Form };
