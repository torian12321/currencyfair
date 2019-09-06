import React, { Component } from "react";
import classNames from "classnames";
// import { ITabs } from "./Tabs.interfaces";
import styles from "./Tabs.module.scss";

const TabsContext = React.createContext({});

// class MyProvider extends Component {
//   state = {
//     name: "Aitor",
//     age: 31
//   };

//   render() {
//     return (
//       <TabsContext.Provider value={{ state: this.state }}>
//         {this.props.children}
//       </TabsContext.Provider>
//     );
//   }
// }
const MyProvider = ({ children }: any) => {
  const [state, setState] = React.useState({
    name: "Aitor",
    age: 31
  });

  const t = (newTab: string) => {
    console.log("nn", newTab);
  };

  return (
    <TabsContext.Provider
      value={{
        state,
        changeTab: t
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

const Tabs = (props: any) => {
  const { children } = props;

  return (
    <MyProvider>
      <div>{children}</div>
    </MyProvider>
  );
};

const TabItem = (props: any) => {
  const { children } = props;

  return (
    <TabsContext.Consumer>
      {(context: any) => (
        <div>
          {context.state.name}
          {children}
          <button onClick={() => context.changeTab("ABC")}>clickMe</button>
        </div>
      )}
    </TabsContext.Consumer>
  );
};

Tabs.Item = TabItem;

export { Tabs };
