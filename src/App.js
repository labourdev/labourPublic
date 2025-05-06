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
const JoinOurTeam = React.lazy(() => import("./pages/joinOurTeam/JoinOurTeam"));
const ContactUs = React.lazy(() => import("./pages/contactUs/ContactUs"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="employers" element={<Employers />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="jobseekers" element={<JobSeekers />} />
      <Route path="joinourteam" element={<JoinOurTeam />} />
      <Route path="connect" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  );
}

export default App;
