import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import SubscriptionPackage from '../SubcriptionPackage/SubscriptionPackage';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return <>
    <Banner></Banner>
    <About></About>
    <SubscriptionPackage></SubscriptionPackage>
    <Feature></Feature>
    <Testimonial></Testimonial>
    </>
};

export default Home;