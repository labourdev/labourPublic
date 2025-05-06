import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainLoading from "../components/loading/MainLoading";

const RootLayout = () => {
  const location = useLocation();
  const hiddenLayoutRoutes = ["/connect"];
  const shouldHideLayout = hiddenLayoutRoutes.includes(location.pathname);

  return (
    <div className="root-layout">
      {!shouldHideLayout && <Navbar />}
      <Suspense fallback={<MainLoading />}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default RootLayout;
