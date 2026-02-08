// import React from 'react';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// import ScrollToAnchor from './components/ScrollToAnchor';

// // Imports
// import Navbar from './components/landing/Navbar';
// import Hero from './components/landing/Hero';
// import FeatureTabs from './components/landing/FeatureTabs';
// import HowItWorks from './components/landing/HowItWorks';
// import Integrations from './components/landing/Integrations'; 
// import AgenticAI from './components/landing/AgenticAI';       
// import SocialProof from './components/landing/SocialProof';
// import Testimonials from './components/landing/Testimonials';
// import Footer from './components/landing/Footer';

// // PAGE IMPORTS 
// import Contact from './pages/contact';
// import GenerativeAI from './pages/GenrativeAI'; // NEW
// import Pricing from './pages/Pricing'    // NEW
// import Solutions from './pages/Solutions';       // NEW

// // Home Layout
// const HomePage = () => (
//   <div className="max-w-7xl min-h-screen flex flex-col items-center justify-center mx-auto">
//     <Navbar />
//     <Hero />
//     <SocialProof />
//     <AgenticAI />
//     <FeatureTabs />
//     <Integrations />
//     <HowItWorks />
//     <Testimonials />
//     <Footer />
//   </div>
// );

// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToAnchor />
//       <Routes>
        
//         {/* --- MAIN ROUTES --- */}
//         <Route path="/" element={<HomePage />} />
        
//         {/* --- DEDICATED PAGES --- */}
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/ai" element={<GenerativeAI />} />      {/* /ai link */}
//         <Route path="/pricing" element={<Pricing />} />      {/* /pricing link */}
//         <Route path="/solutions" element={<Solutions />} />  {/* /solutions link */}
        
//         {/* Login Placeholder */}
//         <Route path="/login" element={<div className="h-screen flex items-center justify-center">Login Page</div>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Hero from "./components/landing/Hero";
import FeatureTabs from "./components/landing/FeatureTabs";
import HowItWorks from "./components/landing/HowItWorks";
import Integrations from "./components/landing/Integrations";
import AgenticAI from "./components/landing/AgenticAI";
import SocialProof from "./components/landing/SocialProof";
import Testimonials from "./components/landing/Testimonials";

import Home from "./pages/Home";
import Contact from "./pages/contact";
import GenerativeAI from "./pages/GenrativeAI";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";


function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />

      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai" element={<GenerativeAI />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/login"
            element={
              <div className="h-[60vh] flex items-center justify-center">
                Login Page
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
