// File: app/pages/Home.jsx
import React from 'react';
import Hero from "../Components/Hero/Hero";
import Experience from "../Components/Experience/Experience";
import MetricMarvels from "../Components/MetricMarvels/MetricMarvels";
import SolutionsCreated from "../Components/SolutionsCreated/SolutionsCreated"
import CybersecurityArticle from "../pages/articles/CybersecurityArticle"
import SolutionsShowcase from "../Components/SolutionsShowcase/SolutionsShowcase";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import EducationCertifications from "../Components/EducationCertifications/EducationCertifications";
import Articles from "../pages/articles/articles.jsx"; // Corrected import path for Articles component
import Testimonial from '../Components/Testimonial/Testimonial.jsx';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <MetricMarvels></MetricMarvels>
            <SolutionsCreated></SolutionsCreated>
            <SolutionsShowcase></SolutionsShowcase>
            <BrandSlider></BrandSlider>
            <EducationCertifications></EducationCertifications>
            {/* Articles component: Wrapped in a hidden div to ensure it is not displayed. */}
            {/* Its logic (loading/saving to Local Storage) will still run in the background. */}
            <div className="hidden">
                <Articles></Articles>
               
            </div>
             <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
