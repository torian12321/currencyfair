import React from "react";
import {
  Panel,
  Heading,
  Button,
  useModal,
  Tabs,
  CurrencyBadget
} from "components/ui";
import { MainFooter } from "./MainFooter";
import styles from "./Main.module.scss";
import Lorem from "./Lorem";

const Main = (props: any) => {
  const { className } = props;
  const { Modal, showModal } = useModal();

  return (
    <div className={className}>
      <Modal>I have some custom content</Modal>

      <Tabs>
        <Tabs.TabItem id="transaction" label="Transaction info">
          <Heading level={4} caption="Let’s set up your transaction!" />
          <Heading
            level={6}
            caption="Specify the amount to be sent or received."
          />
          <Panel>
            <Panel.Section highlight>
              <CurrencyBadget currency="euro" />
            </Panel.Section>
            <Panel.Section theme="dark">
              <CurrencyBadget currency="gbp" />
            </Panel.Section>

            <Button caption="Next" onClick={showModal} />
          </Panel>
        </Tabs.TabItem>
        <Tabs.TabItem id="recipient" label="Recipient info">
          Recipient content...
        </Tabs.TabItem>
        <Tabs.TabItem id="payment" label="Make payment">
          Payment content...
        </Tabs.TabItem>
      </Tabs>

      {/* <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem /> <Lorem /> <Lorem /> <Lorem /> <Lorem /> */}
      <MainFooter />
    </div>
  );
};

export { Main };
