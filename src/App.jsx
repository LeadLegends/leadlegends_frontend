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
import SetPassword from "./pages/SetPassword";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ManagerDashboard from "./pages/dashboard/ManagerDashboard";
import SalesDashboard from "./pages/dashboard/SalesDashboard";
import AdminUsers from "./pages/dashboard/AdminUsers";
import AdminLeads from "./pages/dashboard/AdminLeads";
import AdminReports from "./pages/dashboard/AdminReports";
import AdminSettings from "./pages/dashboard/AdminSettings";
import ManagerAssignLeads from "./pages/dashboard/ManagerAssignLeads";
import ManagerTeamLeads from "./pages/dashboard/ManagerTeamLeads";
import ManagerPerformance from "./pages/dashboard/ManagerPerformance";
import ManagerReports from "./pages/dashboard/ManagerReports";
import SalesLeads from "./pages/dashboard/SalesLeads";
import SalesFollowups from "./pages/dashboard/SalesFollowups";
import SalesPerformance from "./pages/dashboard/SalesPerformance";
import Account from "./pages/dashboard/Account";
import CreateUserForm from "./components/dashboard/CreateUserForm";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  // MOCK USER (replace later with auth)
  const [user, setUser] = useState({
    name: "Vinod",
    role: "manager", // change to manager / admin / sales  to test
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>


        <Route element={<DashboardLayout user={user} setUser={setUser} />}>
          {/* Admin Dashboard */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route
            path="/dashboard/admin/users"
            element={<AdminUsers />}
          />
          <Route
            path="/dashboard/admin/users/create-user"
            element={<CreateUserForm />}
          />
          <Route
            path="/dashboard/admin/leads"
            element={<AdminLeads />}
          />
          <Route
            path="/dashboard/admin/reports"
            element={<AdminReports />}
          />
          <Route
            path="/dashboard/admin/settings"
            element={<AdminSettings />}
          />

          {/* Sales Executive Dashboard */}
          <Route path="/dashboard/sales" element={<SalesDashboard />} />
          <Route
            path="/dashboard/sales/leads"
            element={<SalesLeads />}
          />
          <Route
            path="/dashboard/sales/followups"
            element={<SalesFollowups />}
          />
          <Route
            path="/dashboard/sales/performance"
            element={<SalesPerformance />}
          />

          {/* Account (topbar profile/settings) */}
          <Route
            path="/dashboard/account"
            element={<Account user={user} />}
          />

          {/* Manager Dashboard */}
          <Route path="/dashboard/manager" element={<ManagerDashboard />} />
          <Route
            path="/dashboard/manager/assign-leads"
            element={<ManagerAssignLeads />}
          />
          <Route
            path="/dashboard/manager/team-leads"
            element={<ManagerTeamLeads />}
          />
          <Route
            path="/dashboard/manager/performance"
            element={<ManagerPerformance />}
          />
          <Route
            path="/dashboard/manager/reports"
            element={<ManagerReports />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
