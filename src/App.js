import { HashRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Employers from "./pages/employers/Employers";
import AboutUs from "./pages/aboutUs/AboutUs";

// layouts
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="employers" element={<Employers />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
