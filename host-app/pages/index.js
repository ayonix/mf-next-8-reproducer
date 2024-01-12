import Button from "../components/Button";
import { useFederatedComponent } from "../components/useFederatedComponent";

export default function Home() {
  const module = "./Button";
  const scope = "remote";
  const url = "http://localhost:3000/MFRemote/remote.js";
  const { Component, errorLoading } = useFederatedComponent(url, scope, module);

  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Client - Button</h2>
      {errorLoading}
      {Component && <Component />}
    </div>
  );
}
