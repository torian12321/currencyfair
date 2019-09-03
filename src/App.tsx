import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Button, Spinner } from "components/ui";
import { useWindowScrollPosition } from "components/hooks";

const App: React.FC = () => {
  const { position } = useWindowScrollPosition();

  console.log("Position", position);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button.Group>
          <Button caption="Basic" />
          <Button caption="Outline" outline />
        </Button.Group>

        <Button caption="Disabled" disabled />
        <Button caption="Loading" loading />
        <Spinner />
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="lg" />
        <Spinner size="xl" />
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
      </header>
    </div>
  );
};

export default App;
