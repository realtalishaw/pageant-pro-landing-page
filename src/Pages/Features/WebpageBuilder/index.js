import React from 'react';
import Layout from '../Layout';
import {
  ShoppingCartIcon,
  CurrencyDollarIcon,
 ShareIcon,
} from '@heroicons/react/24/outline';
import { FaBlog } from "react-icons/fa";
import { RiDragDropLine } from "react-icons/ri";
import { GrTemplate } from "react-icons/gr";

const TitleholderWebsite = () => {
  return (
    <Layout
      pageTitle="Titleholder Website | Pageant Pro"
      pageDescription="Build your personal titleholder website with ease using our drag-and-drop builder. Showcase your achievements, blog, online store, and more."

      title="Titleholder Website Builder"
      subtitle="Create your custom titleholder website with our easy-to-use drag-and-drop builder."
      mainImg="/images/titleholder-website.png"
      features={[
        { name: 'Website Templates', icon: GrTemplate, description: 'Start with professionally designed templates tailored for titleholders.' },
        { name: 'Drag & Drop Builder', icon: RiDragDropLine, description: 'Easily customize your site with our intuitive drag-and-drop interface.' },
        { name: 'Online Store', icon: ShoppingCartIcon, description: 'Sell merchandise, tickets, or services directly from your website.' },
        { name: 'Blog Platform', icon: FaBlog, description: 'Engage your audience with regular updates, stories, and insights on your blog.' },
        { name: 'Fundraising & Sponsorship', icon: CurrencyDollarIcon, description: 'Promote and manage your fundraising efforts and sponsorship deals.' },
        { name: 'Social Sharing', icon: ShareIcon, description: 'Integrated social media tools make it easy to share your content and grow your audience.' },
      ]}
      offerTitle="Empower Your Pageant Journey"
      offerSubtitle="With your own titleholder website, you're in control. Showcase your journey, achievements, and connect with supporters like never before."
      additionalInfo="Create a stunning online presence that captures your pageant journey and personal brand."
      p1="Utilize the drag-and-drop builder to personalize your site, reflecting your unique story and pageant platform."
      p2="From merchandising to blogging and fundraising, your titleholder website is the central hub for your engagement with fans and sponsors."
      img1="/images/titleholder-website-demo.png"
    />
  );    
}

export default TitleholderWebsite;
