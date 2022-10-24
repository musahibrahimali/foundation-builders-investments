import React from 'react';
import {
  AboutSection,
  HeroSection,
  InvestmentPlanSection,
  WhySection,
  HowItWorks,
} from '../components';
import { MainLayout } from "../components/";

const Home = () => {

  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <InvestmentPlanSection />
      <WhySection />
      <HowItWorks />
    </React.Fragment>
  );
}
Home.Layout = MainLayout;
export default Home;