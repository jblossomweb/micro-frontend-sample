import React from "react";
import { mount } from "dashboard/DashboardApp";
import useApp from "../hooks/useApp";

const DashboardApp = () => {
  const ref = useApp(mount);

  return <div ref={ref} />;
};

export default DashboardApp;
