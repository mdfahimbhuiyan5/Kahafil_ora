// File: app/pages/Home.jsx
import React from 'react';
import Navbar from "../Components/Shared/Navbar.jsx"; // Make sure this matches the actual path
import Hero from "../Components/Hero/Hero";
import Experience from "../Components/Experience/Experience";
import MetricMarvels from "../Components/MetricMarvels/MetricMarvels";
import SolutionsCreated from "../Components/SolutionsCreated/SolutionsCreated";
import CybersecurityArticle from "../pages/articles/CybersecurityArticle"; // Optional: remove if unused
import SolutionsShowcase from "../Components/SolutionsShowcase/SolutionsShowcase";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import EducationCertifications from "../Components/EducationCertifications/EducationCertifications";
import Articles from "../pages/articles/articles.jsx";
import Testimonial from '../Components/Testimonial/Testimonial.jsx';
import About from '../Components/About/About.jsx';

const Home = () => {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <About />
            <BrandSlider />
            
          { /* <MetricMarvels /> */}
            <SolutionsShowcase />
            <Experience />
            <SolutionsCreated />
            
            
            
           {/* <EducationCertifications />*/}

            {/* Hidden Articles logic */}
            <div className="hidden">
                <Articles />
            </div>

            <Testimonial />
        </div>
    );
};

export default Home;
