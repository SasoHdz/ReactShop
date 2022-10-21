import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./routes/App";

createRoot(document.getElementById("app")).render(
  <RouterProvider router={App} />
);
//ReactDOM.render(<App />, document.getElementById('app'));
