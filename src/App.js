import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import DigitalBinder from './Pages/Features/DigitalBinder';
import TrainingResources from './Pages/Features/TrainingResources';
import Appearances from './Pages/Features/Appearances';
import WebpageBuilder from './Pages/Features/WebpageBuilder';
import SocialMediaManagement from './Pages/Features/SocialMediaManagement';
import Fundraising from './Pages/Features/Fundraising';
import PlatformManagement from './Pages/Features/PlatformManagement';
import FAQs from './Pages/FAQs';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';
import Directors from './Pages/Directors';
import BlogPost from './Pages/Blog/BlogPost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features/digital-binder" element={<DigitalBinder />} />
        <Route path="/features/training-resources" element={<TrainingResources />} />
        <Route path="/features/appearances" element={<Appearances />} />
        <Route path="/features/titleholder-website" element={<WebpageBuilder />} />
        <Route path="/features/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/features/fundraising" element={<Fundraising />} />
        <Route path="/features/platform-community-service" element={<PlatformManagement />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pageant-directors" element={<Directors />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
