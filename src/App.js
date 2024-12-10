import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./pages/home/Home"));
const Services = React.lazy(() => import("./pages/services/Services"));
const Employers = React.lazy(() => import("./pages/employers/Employers"));
const AboutUs = React.lazy(() => import("./pages/aboutUs/AboutUs"));
const RootLayout = React.lazy(() => import("./layouts/RootLayout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="employers" element={<Employers />} />
      <Route path="aboutus" element={<AboutUs />} />
    </Route>
  ),
  {
    basename: "/labourPublic", // Set the basename for GitHub Pages
  }
);

function App() {
  return (
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  );
}

export default App;
