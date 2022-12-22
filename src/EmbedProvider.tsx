import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// Context
export const EmbedContext = createContext({});

// Create a custom hook to use the context.
export const useEmbedContext = () => useContext(EmbedContext);

// Provider of context.
const EmbedProvider = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [manifest, setManifest] = useState<{
    "src/main.tsx": { file: string };
    "src/main.css": { file: string };
  } | null>(null);

  /**
   * Double check if the script is
   * already on the DOM
   */
  const scriptAlreadyExists = () =>
    document.querySelector("script#embed-app") !== null;

  /**
   * Append the script to the document.
   * Whenever the script has been loaded it will
   * set the isLoaded state to true.
   *
   * 🎗️ Reloading will refetch the manifest and
   * append the script again.
   */
  const appendEmbedScript = () => {
    if (manifest === null) {
      console.error({ appendEmbedScriptError: "manifest not found" });
    }

    const script = document.createElement("script");
    script.id = "embed-app";
    // TODO: check for 404 on script - Chance Smith 12/16/2022
    script.src = `http://127.0.0.1:8080/${manifest["src/main.tsx"]["file"]}`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = () => setHasLoaded(true);
    document.body.append(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `http://127.0.0.1:8080/${manifest["src/main.css"]["file"]}`;
    document.head.appendChild(link);
  };

  useEffect(() => {
    async function getManifest() {
      const manifest =
        // @ts-ignore - CDN link
        (await fetch("http://127.0.0.1:8080/manifest.json")) || null;
      const manifestJson = await manifest.json();
      setManifest(manifestJson);
    }

    if (!manifest) {
      getManifest();
    }
  }, []);

  /**
   * Runs first time when component is mounted
   * and adds the script to the document and if
   * the manifest changes.
   */
  useEffect(() => {
    if (!scriptAlreadyExists() && manifest) {
      appendEmbedScript();
    }
  }, [manifest]);

  /**
   * Whenever the script has loaded set isReady state to true and passes that
   * through the context to the consumers.
   */
  useEffect(() => {
    if (hasLoaded === true) {
      setIsReady(true);
    }
  }, [hasLoaded]);

  return (
    <EmbedContext.Provider value={{ isReady, hasLoaded }}>
      <div id="new-features" />
    </EmbedContext.Provider>
  );
};

export default EmbedProvider;
