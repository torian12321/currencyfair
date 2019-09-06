import React from "react";
import Tabs from "./components/ui/Tabs/TabsNew";

const Main = (props: any) => {
  return (
    <>
      <Tabs>
        <Tabs.TabItem id="gator" label="GATOR">
          See ya later, Alligator!
        </Tabs.TabItem>
        <Tabs.TabItem id="croc" label="CROCK" disabled>
          After &apos;while, Crocodile!
        </Tabs.TabItem>
        <Tabs.TabItem id="sarcosuchus" label="SARCOSUCHUS" disabled>
          Nothing to see here, this tab is extinct!
        </Tabs.TabItem>
      </Tabs>
    </>
  );
};

export { Main };
