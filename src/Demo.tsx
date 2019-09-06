import React from "react";
import { Tabs } from "./components/ui";

const Main = (props: any) => {
  return (
    <Tabs>
      <Tabs.TabItem id="transaction" label="Transaction info">
        See ya later, Alligator!
      </Tabs.TabItem>
      <Tabs.TabItem id="recipient" label="Recipient info" disabled>
        After &apos;while, Crocodile!
      </Tabs.TabItem>
      <Tabs.TabItem id="payment" label="Make payment" disabled>
        Nothing to see here, this tab is extinct!
      </Tabs.TabItem>
    </Tabs>
  );
};

export { Main };
