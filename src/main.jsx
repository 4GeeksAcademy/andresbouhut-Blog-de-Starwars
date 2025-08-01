import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);