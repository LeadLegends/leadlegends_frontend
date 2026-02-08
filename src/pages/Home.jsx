import React from "react";

// Landing components
import Hero from "../components/landing/Hero";
import SocialProof from "../components/landing/SocialProof";
import AgenticAI from "../components/landing/AgenticAI";
import FeatureTabs from "../components/landing/FeatureTabs";
import Integrations from "../components/landing/Integrations";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <AgenticAI />
      <FeatureTabs />
      <Integrations />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;