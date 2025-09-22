import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pushPageView } from "./utils/analytics";

// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Map routes to friendly names & categories
    const pageMap = {
      "/": { name: "Home", category: "General" },
      "/about": { name: "About Us", category: "Company" },
      "/contact": { name: "Contact Us", category: "Engagement" },
      "/help": { name: "Help", category: "Support" }
    };

    const { name, category } = pageMap[location.pathname] || {
      name: location.pathname,
      category: "Other"
    };

    pushPageView(name, category);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}
