import React from 'react';
import Header from '../../Components/Header';
import HeroBlock from './HeroBlock';
import ProductDemo from './ProductDemo';
import BlogList from '../../Components/BlogList';
import CTA from '../../Components/CTA';
import FeaturesList from './FeaturesList';
import Footer from '../../Components/Footer';
import Problem from './Problem';
import FAQs from './FAQs';
import Pricing from './Pricing';
import useSEO from '../../hooks/useSEO';




const Home = () => {
  useSEO({
    title: "Pageant Pro",
    description: "Pageant Pro is a comprehensive platform designed to guide startups from ideation to series A.",
  });
  return (
    <div>
      <Header />
      <HeroBlock />
      <div className="hidden md:block">
        <ProductDemo />
      </div>
      <div className="block md:hidden px-4 border shadow-lg">
        <img src="/images/productDemo.png" alt="Product Demo" />
      </div>
      <Problem />
      <FeaturesList />
      <BlogList />
      <Pricing />
      <FAQs />
      <CTA />
      <Footer />

    </div>
  );
}

export default Home;
