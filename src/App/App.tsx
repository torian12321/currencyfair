import React from "react";
import { Header } from "./Header";
import { Button, Spinner, useModal, Panel, Link } from "components/ui";

const App: React.FC = () => {
  const { Modal, showModal } = useModal();

  return (
    <>
      <Modal>I have some custom content</Modal>
      <div className="App">
        <Header />

        <div>
          <Spinner />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="lg" />
          <Spinner size="xl" />

          <Button.Group>
            <Button caption="Basic" onClick={showModal} />
            <Button caption="Outline" outline />
          </Button.Group>

          <Button caption="Disabled" disabled />
          <Button caption="Loading" loading />

          <Panel>
            <Panel.Section>Sending Details</Panel.Section>
            <Panel.Section>You send....</Panel.Section>
            <Panel.Section>Receiving Details</Panel.Section>
            <Panel.Section>Rate...</Panel.Section>
            <Panel.Section>
              You save £66.19 compared to your bank!
            </Panel.Section>
          </Panel>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link caption="Go somewhere" href="bla bla" />
        </div>
      </div>
    </>
  );
};

export { App };
