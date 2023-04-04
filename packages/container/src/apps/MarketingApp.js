import React from "react";
import { mount } from "marketing/MarketingApp";
import useApp from "../hooks/useApp";

const MarketingApp = () => {
  const ref = useApp(mount);

  return <div ref={ref} />;
};

export default MarketingApp;
