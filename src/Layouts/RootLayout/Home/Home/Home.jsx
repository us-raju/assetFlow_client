import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import SubscriptionPackage from '../SubcriptionPackage/SubscriptionPackage';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';
import HowItWork from '../HowItWork/HowItWork';
import Faq from '../FAQ/Faq';
import Contact from '../ContactCTA/Contact';



const Home = () => {
    return <>
    <Banner></Banner>
    <About></About>
    <SubscriptionPackage></SubscriptionPackage>
    <Feature></Feature>
    <Testimonial></Testimonial>
    <HowItWork></HowItWork>
    <Faq></Faq>
    <Contact></Contact>
    </>
};

export default Home;