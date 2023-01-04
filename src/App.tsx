import { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import EmbedProvider from "./EmbedProvider";
import MainLayout from "./styles/mainLayout";

// add react router and with two routes
// one for the parent app and one for the child app

export function App() {
  return (
    <div className="App">
      <div className="l-container">
        <div className="l-view-layout l-view-layout--sidebar">
          {/* <div>AA Parent App</div> */}
          <MainLayout />

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
      </div>
    </div>
  );
}

export default App;
