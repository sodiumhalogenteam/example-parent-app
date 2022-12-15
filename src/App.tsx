import "./App.css";
import React, { Suspense, useState } from "react";
import { createRoot } from "react-dom/client";

export function App() {
  return (
    <div className="App">
      <div>Parent Appssss</div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <RendersRootWithUpdate />
        </div>
      </Suspense>
    </div>
  );
}

function RendersRootWithUpdate() {
  const [error, setError] = useState<null | string>(null);
  React.useEffect(() => {
    const InnerApp = React.lazy(() =>
      // @ts-ignore - believe me, it's there -- checking below too
      import("http://127.0.0.1:8080/aa-feats.js").catch(() => {
        setError("404 script not found");
      })
    );
    const root = createRoot(document.querySelector("#new-features")!);
    if (InnerApp) {
      root.render(<InnerApp />);
    } else {
      root.render(<>{error ?? "not found"}</>);
    }
  }, []);
  return <div id="new-features" />;
}

export default App;
