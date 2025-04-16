import React from "react";
import ReactDOM from "react-dom/client";
import TierraDeSiempreApp from "./TierraDeSiempreApp";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker Registered");
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TierraDeSiempreApp />);
