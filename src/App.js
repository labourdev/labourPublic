import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";

import RootLayout from "./layouts/RootLayout";

const Home = React.lazy(() => import("./pages/home/Home"));
const Services = React.lazy(() => import("./pages/services/Services"));
const Employers = React.lazy(() => import("./pages/employers/Employers"));
const AboutUs = React.lazy(() => import("./pages/aboutUs/AboutUs"));
const JobSeekers = React.lazy(() => import("./pages/jobSeekers/JobSeekers"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="employers" element={<Employers />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="jobseekers" element={<JobSeekers />} />
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
