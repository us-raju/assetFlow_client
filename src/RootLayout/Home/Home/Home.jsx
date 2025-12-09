import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import SubscriptionPackage from '../SubcriptionPackage/SubscriptionPackage';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';
import HowItWork from '../HowItWork/HowItWork';
import Faq from '../FAQ/Faq';



const Home = () => {
    return <>
    <Banner></Banner>
    <About></About>
    <SubscriptionPackage></SubscriptionPackage>
    <Feature></Feature>
    <Testimonial></Testimonial>
    <HowItWork></HowItWork>
    <Faq></Faq>
    </>
};

export default Home;