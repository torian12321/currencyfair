import React from "react";
import classNames from "classnames";
import { Tab } from "./TabsTab";
import { ITabs, ITabItem } from "./Tabs.interfaces";
import styles from "./Tabs.module.scss";

const Tabs = (props: ITabs) => {
  const { children = [], defaultTab, className } = props;
  const [activeTab, setactiveTab] = React.useState(defaultTab);

  React.useEffect(() => {
    // I not set, render first tab by default
    if (!activeTab) {
      setactiveTab(children[0].props.id);
    }
  }, []);

  const onClickTabItem = (newTab: string) => {
    setactiveTab(newTab);
  };

  return (
    <div className={classNames(styles.tabs, className)}>
      <div className={styles.labels}>
        {children.map((child, index) => {
          const { id, ...rest } = child.props;

          return (
            <Tab
              id={id}
              step={index + 1}
              isActiveTab={activeTab === id}
              key={id}
              onClick={onClickTabItem}
              {...rest}
            />
          );
        })}
      </div>
      <div className={styles.contentWrapper}>
        {// Display only active TabContent
        children.find((child: any) => child.props.id === activeTab)}
      </div>
    </div>
  );
};

const TabItem = (props: ITabItem) => {
  const { children } = props;

  return <div>{children}</div>;
};

Tabs.TabItem = TabItem;

export { Tabs };
