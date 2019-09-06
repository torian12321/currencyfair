import React from "react";
import { Tabs } from "components/ui";
import TabsA from "./components/ui/Tabs/TabsNew";

const Main = (props: any) => {
  return (
    <>
      <Tabs name="custom">
        <Tabs.Item id="a">AAAA</Tabs.Item>
        <Tabs.Item id="b">BBBB</Tabs.Item>
        <Tabs.Item id="c">CCCC</Tabs.Item>
      </Tabs>

      <TabsA>
        <div id="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div id="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div id="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </TabsA>
    </>
  );
};

export { Main };
