import { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EmbedProvider from "./EmbedProvider";

// add react router and with two routes
// one for the parent app and one for the child app

export function App() {
  return (
    <div className="App">
      <div>AA Parent App</div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Home
                <br />
                <Link to={"/new-features"}>click me</Link>
              </div>
            }
          />

          <Route
            path="/new-features/*"
            element={
              <div>
                New Features route
                <Suspense fallback={<div>Loading...</div>}>
                  <div>
                    <EmbedProvider />
                  </div>
                </Suspense>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
