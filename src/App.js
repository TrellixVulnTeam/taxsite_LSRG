// styling
import "./styles/index.css";
// react depenedencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import sideBarImg from "./images/sidebarimg.jpeg";

// api import

function App() {
  const footerStyle = {
    minHeight: "calc(100vh - 60px)",
  };
  const sideBarStyle = {
    backgroundImage: "url(" + sideBarImg + ")",
  };
  const yelpData = [
    {
      name: "Tiffinay M.",
      location: "Atlanta, GA",
      date_created: "8/18/2021",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/nPBQH0CjGF7ZVg-laUSyaA/120s.jpg",
      comment:
        "Have been getting my taxes done here for years. They are professional and knowledgable, I have never had any issues.",
    },
    {
      name: "Najah H.",
      location: "Smyrna, GA",
      date_created: "3/9/2018",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/U-6CQoIyplD6DgnqrM7nEw/120s.jpg",
      comment:
        "Al-Nisa S. Shaheed is a Sr. Tax Analyst and she’s been doing my taxes for years! They are a Black-owned business that guides you along the way for tax preparation. Thorough. Informative. Timely. Great customer service!!! Make your appointment today.",
    },
    {
      name: "Najah H.",
      location: "Smyrna, GA",
      date_created: "3/9/2018",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/U-6CQoIyplD6DgnqrM7nEw/120s.jpg",
      comment:
        "Al-Nisa S. Shaheed is a Sr. Tax Analyst and she’s been doing my taxes for years! They are a Black-owned business that guides you along the way for tax preparation. Thorough. Informative. Timely. Great customer service!!! Make your appointment today.",
    },
    {
      name: "Najah H.",
      location: "Smyrna, GA",
      date_created: "3/9/2018",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/U-6CQoIyplD6DgnqrM7nEw/120s.jpg",
      comment:
        "Al-Nisa S. Shaheed is a Sr. Tax Analyst and she’s been doing my taxes for years! They are a Black-owned business that guides you along the way for tax preparation. Thorough. Informative. Timely. Great customer service!!! Make your appointment today.",
    },
    {
      name: "Najah H.",
      location: "Smyrna, GA",
      date_created: "3/9/2018",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/U-6CQoIyplD6DgnqrM7nEw/120s.jpg",
      comment:
        "Al-Nisa S. Shaheed is a Sr. Tax Analyst and she’s been doing my taxes for years! They are a Black-owned business that guides you along the way for tax preparation. Thorough. Informative. Timely. Great customer service!!! Make your appointment today.",
    },
    {
      name: "Najah H.",
      location: "Smyrna, GA",
      date_created: "3/9/2018",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/U-6CQoIyplD6DgnqrM7nEw/120s.jpg",
      comment:
        "Al-Nisa S. Shaheed is a Sr. Tax Analyst and she’s been doing my taxes for years! They are a Black-owned business that guides you along the way for tax preparation. Thorough. Informative. Timely. Great customer service!!! Make your appointment today.",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/taxsite"
          element={
            <LandingPage footerStyle={footerStyle} yelpData={yelpData} />
          }
        />
        <Route
          exact
          path="/taxsite/about"
          element={
            <About sideBarStyle={sideBarStyle} footerStyle={footerStyle} />
          }
        />
        <Route
          exact
          path="/taxsite/contact"
          element={
            <Contact sideBarStyle={sideBarStyle} footerStyle={footerStyle} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
