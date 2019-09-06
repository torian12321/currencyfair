import { createContext } from "react";

// Initialize a context
const Context = createContext({
  tabsName: "",
  registerAnchor: () => {},
  unRegisterAnchor: () => {}
});

export default Context;
