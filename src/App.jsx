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


import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Layout
import MainLayout from "./layouts/MainLayout";


import Home from "./pages/Home";
import Contact from "./pages/contact";
import GenerativeAI from "./pages/GenrativeAI";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";


function App() {
  // MOCK USER (replace later with auth)
  const [user,setUser] = useState({
    name: "Vinod",
    role: "sales", // change to manager / admin / sales  to test
  });

  return (
    <BrowserRouter>
      {/* <ScrollToAnchor /> */}

      <Routes>
        {/* Layout route */}

        {/* Main website Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai" element={<GenerativeAI />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
        </Route>


        <Route element={<DashboardLayout user={user} />}>
        {/* Routes for Admin Dashboard */}
          <Route path="/dashboard/admin" element={<div className=" flex items-center justify-center">Dashboard</div>} />
          <Route path="/dashboard/admin/users" element={<div className=" flex items-center justify-center">Users</div>} />
          <Route path="/dashboard/admin/leads" element={<div className=" flex items-center justify-center">Leads</div>} />
          <Route path="/dashboard/admin/reports" element={<div className=" flex items-center justify-center">Reports</div>} />
          <Route path="/dashboard/admin/settings" element={<div className=" flex items-center justify-center">Settings</div>} />

          {/* Routes for Sales Executive Dashboard */}
          <Route path="/dashboard/sales" element={<div className=" flex items-center justify-center">Dashboard</div>} />
          <Route path="/dashboard/sales/leads" element={<div className=" flex items-center justify-center"> Leads</div>} />
          <Route path="/dashboard/sales/followups" element={<div className=" flex items-center justify-center">Follow-ups</div>} />
          <Route path="/dashboard/sales/performance" element={<div className="h-screen flex items-center justify-center">Performance</div>} />

          {/* Routes for Manager Dashboard */}
          <Route path="/dashboard/manager" element={<div className=" flex items-center justify-center">Dashboard</div>} />
          <Route path="/dashboard/manager/assign-leads" element={<div className=" flex items-center justify-center">Assign Leads</div>} />
          <Route path="/dashboard/manager/team-leads" element={<div className=" flex items-center justify-center">Team Leads</div>} />
          <Route path="/dashboard/manager/performance" element={<div className=" flex items-center justify-center">Performance</div>} />
          <Route path="/dashboard/manager/reports" element={<div className=" flex items-center justify-center">Reports</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
