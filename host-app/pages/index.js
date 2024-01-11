import { importRemote } from "@module-federation/utilities";
import { lazy, useEffect, useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [Component, setComponent] = useState(null);

  const module = "Button";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(
        lazy(
          async () =>
            await importRemote({
              url: "http://localhost:3000/MFRemote",
              scope: "remote",
              remoteEntryFileName: "remote.js",
              module: module,
            })
        )
      );
    }
  }, []);
  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Client - Button</h2>
      {Component && <Component />}
    </div>
  );
}
