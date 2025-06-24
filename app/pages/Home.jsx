import Hero from "../Components/Hero/Hero";
import Experience from "../Components/Experience/Experience";
import MetricMarvels from "../Components/MetricMarvels/MetricMarvels";
import SolutionsCreated from "../Components/SolutionsCreated/SolutionsCreated"
import CybersecurityArticle from "../pages/articles/CybersecurityArticle"
import SolutionsShowcase from "../Components/SolutionsShowcase/SolutionsShowcase";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import EducationCertifications from "../Components/EducationCertifications/EducationCertifications";

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
        

        </div>
    );
};

export default Home;