import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { StrictMode } from "react";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
