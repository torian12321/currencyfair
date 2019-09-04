import React from "react";
import { Panel } from "components/ui";

const Content = ({ className }: any) => (
  <div className={className}>
    <Panel>
      <Panel.Section>Sending Details</Panel.Section>
      <Panel.Section>You send....</Panel.Section>
      <Panel.Section>Receiving Details</Panel.Section>
      <Panel.Section>Rate...</Panel.Section>
      <Panel.Section>You save £66.19 compared to your bank!</Panel.Section>
    </Panel>
  </div>
);

export { Content };
