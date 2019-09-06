import React from "react";
import Tab from "./Tab";

export interface IPanelSection {
  children?: any;
  className?: string;
}

const Tabs = (props: IPanelSection) => {
  const { children = [] } = props;

  const [activeTab, setactiveTab] = React.useState();
  const onClickTabItem = (newTab: string) => {
    setactiveTab(newTab);
  };

  React.useEffect(() => {
    // I not set, render first tab by default
    if (!activeTab) {
      setactiveTab(children[0].props.id);
    }
  }, []);

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child: any) => {
          const { id, label } = child.props;

          return (
            <Tab
              id={id}
              isActiveTab={activeTab === id}
              key={id}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.find((child: any) => child.props.id === activeTab)}
      </div>
    </div>
  );
};

const TabItem = (props: any) => {
  const { children } = props;

  return <div>{children}</div>;
};

Tabs.TabItem = TabItem;

export default Tabs;
