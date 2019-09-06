import * as React from "react";

interface ITab {
  // children: React.ReactElement;
  className?: string;
  onClick?: any;
  label: string;
  id: string;
  disabled?: boolean;
  isActiveTab?: boolean;
}

const Tab = (props: ITab) => {
  const {
    onClick,
    id,
    label = id,
    className
    // disabled = false,
    // isActiveTab = false
  } = props;

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <button type="button" className={className} onClick={handleOnClick}>
      {label}
    </button>
  );
};

export default Tab;
