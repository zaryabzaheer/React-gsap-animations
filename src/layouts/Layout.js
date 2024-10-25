import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <main className="main">{children}</main>
    </>
  );
};

export default Layout;
