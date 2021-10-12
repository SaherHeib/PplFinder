import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "AppRouter";
import { store, persist_Store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persist_Store}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
