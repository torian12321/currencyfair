import React from "react";
import classNames from "classnames";
import { Tab } from "./TabsTab";
import { ITabs, ITabItem } from "./Tabs.interfaces";
import styles from "./Tabs.module.scss";

const Tabs = (props: ITabs) => {
  const { children = [], defaultTab, className } = props;
  const [activeTab, setactiveTab] = React.useState(defaultTab);
  const [process, setProcess] = React.useState(0);

  React.useEffect(() => {
    // I not set, render first tab by default
    if (!activeTab) {
      setactiveTab(children[0].props.id);
    }
  }, []);

  React.useEffect(() => {
    // Calculate position for progressBar
    const currentIndex = children.findIndex(c => c.props.id === activeTab);
    const totalSteps = children.length;

    setProcess(((currentIndex + 1) / totalSteps) * 100);
  }, [activeTab]);

  const onClickTabItem = (newTab: string) => {
    setactiveTab(newTab);
  };

  const renderTabs = () =>
    children.map((child, index) => {
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
    });

  return (
    <div className={classNames(styles.tabs, className)}>
      <div className={styles.labels}>{renderTabs()}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapper_divider}>
          <div
            className={styles.contentWrapper_divider_progress}
            style={{ width: `${process}%` }}
          />
        </div>

        {// Display only active TabContent
        children.find((child: any) => child.props.id === activeTab)}
      </div>
    </div>
  );
};

const TabItem = ({ children }: ITabItem) => children;

Tabs.TabItem = TabItem;

export { Tabs };
