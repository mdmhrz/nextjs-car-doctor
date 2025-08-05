import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import ContactInfoBanner from '../ContactInfoBanner/ContactInfoBanner';
import PopularProducts from '../PopularProducts/PopularProducts';
import OurTeam from '../OurTeam/OurTeam';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Testimonial from '../Testimonial/Testimonial';

const HomePage = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactInfoBanner></ContactInfoBanner>
            <PopularProducts></PopularProducts>
            <OurTeam></OurTeam>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default HomePage;