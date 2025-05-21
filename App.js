import React, { useState } from "react";
import Cursor from "./Cursor";

export default function App() {
  const [settings, setSettings] = useState({
    size: 36,
    color: "#00f2ff",
    outline: "#ffffff33",
    scale: 1.5,
    morph: true,
    magnet: 50,
    tension: 0.2,
    clickEffect: true
  });

  return (
    <>
      <Cursor settings={settings} />
      <div style={{ padding: 32 }}>
        <h1 data-cursor-target>Hover Me</h1>
        <button data-cursor-target>Click Me</button>
        <p data-cursor-target>Hover over this paragraph for a test.</p>
      </div>
    </>
  );
}
