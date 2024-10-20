/**
 * This component is used to render the main layout of the application.
 * It includes the header and the main content section.
 *
 */
import React, { PropsWithChildren } from "react";
import Header from "./header";
import "./style-layout.css";

const LayoutMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout-main">
      <Header />
      <section className="site-content">{children}</section>
    </div>
  );
};

export default LayoutMain;
