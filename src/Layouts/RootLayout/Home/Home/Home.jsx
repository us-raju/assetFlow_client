import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import SubscriptionPackage from "../SubcriptionPackage/SubscriptionPackage";
import Feature from "../Feature/Feature";
import Testimonial from "../Testimonial/Testimonial";
import HowItWork from "../HowItWork/HowItWork";
import Faq from "../FAQ/Faq";
import Contact from "../ContactCTA/Contact";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";

const Home = () => {
  const { user, loading } = useAuth();
  if (loading) return <Loading></Loading>;
  return (
    <>
      <Banner></Banner>
      <About></About>
      {user?.role === "hr" && <SubscriptionPackage></SubscriptionPackage>}

      <Feature></Feature>
      <Testimonial></Testimonial>
      <HowItWork></HowItWork>
      <Faq></Faq>
      <Contact></Contact>
    </>
  );
};

export default Home;
