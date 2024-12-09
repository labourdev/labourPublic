import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default RootLayout;
