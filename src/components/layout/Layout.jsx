import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
