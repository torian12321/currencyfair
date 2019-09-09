import React from "react";
import {
  Panel,
  Heading,
  Button,
  useModal,
  Tabs,
  CurrencyBadget
} from "components/ui";
import { ModalVerification } from "../ModalVerification";
import { MainFooter } from "./MainFooter";
import styles from "./Main.module.scss";

const Main = (props: any) => {
  const { className } = props;
  const { showModal, hiddeModal, isVisible } = useModal();

  return (
    <div className={className}>
      <ModalVerification closeModal={hiddeModal} isVisible={isVisible} />

      <Tabs>
        <Tabs.TabItem id="transaction" label="Transaction info">
          <Heading level={4} caption="Let’s set up your transaction!" />
          <Heading
            level={6}
            caption="Specify the amount to be sent or received."
          />
          <Panel className={styles.infoPanel}>
            <Panel.Section highlight>
              YOU SEND
              <span className={styles.ammount}>
                € 2,000.
                <span className={styles.ammount_cents}>00</span>
              </span>
              <CurrencyBadget currency="euro" className={styles.badget} />
            </Panel.Section>
            <Panel.Section theme="dark">
              RECEIVER GETS
              <span className={styles.ammount}>
                £ 1,717.
                <span className={styles.ammount_cents}>49</span>
              </span>
              <CurrencyBadget currency="gbp" className={styles.badget} />
            </Panel.Section>
          </Panel>

          <Button caption="Next" onClick={showModal} />
        </Tabs.TabItem>

        {
          // The below tabs shuld be disable,
          // but they are not to show how tabs work
        }
        <Tabs.TabItem id="recipient" label="Recipient info">
          Recipient content...
        </Tabs.TabItem>
        <Tabs.TabItem id="payment" label="Make payment">
          Payment content...
        </Tabs.TabItem>
      </Tabs>
      <MainFooter />
    </div>
  );
};

export { Main };
