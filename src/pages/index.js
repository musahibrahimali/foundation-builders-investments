import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCookie, removeCookie } from '../lib/provider';
import {
  AboutSection,
  HeroSection,
  InvestmentPlanSection,
  WhySection,
  HowItWorks,
} from '../components';
import { MainLayout } from "../components/";

const Home = (props) => {

  const { cookie } = props;
  // create an instance of dispatch to pass to the footer
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('cookie', cookie);
    const handleIsCookie = () => {
      if (cookie) {
        dispatch(setCookie(true));
      } else {
        dispatch(removeCookie(false));
      }
    }
    handleIsCookie();
  }, [cookie, dispatch]);

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

// get serverside props (this returns the api key)
export const getServerSideProps = async ({ req }) => {
  let user = false;
  const cookie = req.cookies['access_token'];
  if (cookie !== undefined) {
    user = true;
  }

  return {
    props: {
      cookie: user,
    }
  }
}


Home.Layout = MainLayout;
export default Home;