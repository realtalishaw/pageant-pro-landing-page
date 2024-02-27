import React from 'react';
import Layout from '../Layout';
import {
  CalendarIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  PhotoIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";

const SocialMediaManager = () => {
  return (
    <Layout
      pageTitle="Personal Branding | Pageant Pro"
      pageDescription="Maximize your social media impact with integrated management tools for Facebook, Instagram, and TikTok. Plan and analyze your content for maximum engagement."

      title="Personal Branding & Social Media Manager"
      subtitle="Effortlessly manage your social media presence and engagement across platforms. Create a compelling personal brand with ease."
      mainImg="/images/social-media.png"
      features={[
        { name: 'Multi-Platform Integration', icon: PuzzlePieceIcon, description: 'Seamlessly manage Facebook, Instagram, and TikTok from a single dashboard.' },
        { name: 'Content Calendar', icon: CalendarIcon, description: 'Plan your content strategy with an intuitive content calendar.' },
        { name: 'Media Kit Creation', icon: PhotoIcon, description: 'Create professional media kits for sponsorships and collaborations.' },
        { name: 'Analytics & Insights', icon: ChartBarIcon, description: 'Gain insights into your social media performance with comprehensive analytics.' },
        { name: 'AI-Powered Content Ideas', icon: AiFillBulb, description: 'Generate content ideas and captions with the help of AI.' },
        { name: 'Caption Assistance', icon: ChatBubbleBottomCenterIcon, description: 'Craft compelling captions with AI-powered suggestions.' },
        // Icons for social media platforms
        { name: 'Facebook Management', icon: FaFacebookF, description: 'Directly manage your Facebook page and posts.' },
        { name: 'Instagram Management', icon: FaInstagram, description: 'Schedule posts, stories, and manage your Instagram feed.' },
        { name: 'TikTok Management', icon: FaTiktok, description: 'Plan and publish content directly to TikTok.' },
      ]}
      offerTitle="Elevate Your Social Media Game"
      offerSubtitle="Harness the power of Pageant Pro’s social media manager to amplify your online presence and engagement."
      additionalInfo="Streamline your social media efforts with our all-in-one platform."
      p1="From content planning to analytics, our tools are designed to boost your social media effectiveness."
      p2="Utilize AI to stay ahead with trending content ideas, ensuring your social media strategy remains fresh and impactful."
      img1="/images/social-media-manager-demo.png"
    />
  );    
}

export default SocialMediaManager;
