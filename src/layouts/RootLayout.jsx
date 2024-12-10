import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainLoading from "../components/loading/MainLoading";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <Suspense fallback={<MainLoading />}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default RootLayout;
