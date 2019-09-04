import React from "react";
import { Header } from "./Header";
import { Button, Spinner, useModal } from "components/ui";

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

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </>
  );
};

export { App };
