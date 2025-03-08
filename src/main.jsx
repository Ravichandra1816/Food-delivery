// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContex from "./Contex/UserContex.jsx";
import { store } from "./redux/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContex>
      <App />
    </UserContex>
  </Provider>
);
