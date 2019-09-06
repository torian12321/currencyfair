import React from "react";
import Tab from "./Tab";

export interface IPanelSection {
  children?: any;
  className?: string;
}

const Tabs = (props: IPanelSection) => {
  const [activeTab, setactiveTab] = React.useState();
  const onClickTabItem = (newTab: string) => {
    setactiveTab(newTab);
  };

  const { children } = props;

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child: any) => {
          const { id } = child.props;

          return (
            <Tab
              id={id}
              isActiveTab={activeTab === id}
              key={id}
              label={id}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child: any) => {
          if (child.props.id !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
