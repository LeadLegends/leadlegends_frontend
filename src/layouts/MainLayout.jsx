import { Outlet } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;