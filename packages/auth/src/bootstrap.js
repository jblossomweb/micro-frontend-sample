import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (el, options = {}) => {
  const { onNavigate, onSignIn, defaultHistory, initialPath } = options;

  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  !!onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;

      if (nextPathname !== currentPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_mfp_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
