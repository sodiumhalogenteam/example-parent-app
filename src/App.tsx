import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore - included in index.html
// import InnerApp from "./aa-feats.js";

import InnerApp from "http://127.0.0.1:8080/aa-feats.js";

export function App() {
  function RendersRootWithUpdate() {
    const [count] = React.useState(0);
    React.useEffect(() => {
      const root = createRoot(document.querySelector("#new-features")!);
      if (InnerApp) {
        root.render(<InnerApp />);
      } else {
        root.render(<>not found</>);
      }
    }, [count]);
    return <div id="new-features" />;
  }

  return (
    <div className="App">
      <div>Parent App</div>
      <div>
        <RendersRootWithUpdate />
      </div>
    </div>
  );
}

export default App;
