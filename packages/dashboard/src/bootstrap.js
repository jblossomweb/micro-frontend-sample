import { createApp } from "vue";

import Dashboard from "./components/Dashboard";

const mount = (el, _options = {}) => {
  const app = createApp(Dashboard);
  app.mount(el);
  return {};
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_mfp_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
