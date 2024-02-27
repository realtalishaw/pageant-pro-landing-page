import React from 'react';
import Layout from '../Layout';
import {
  PencilIcon,
  ClipboardDocumentCheckIcon,
  CameraIcon,
  CalendarIcon,
  DocumentTextIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline';
import { FaHandsHelping } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";

const PlatformCommunityServiceManager = () => {
  return (
    <Layout
      pageTitle="Platform & Community Service Manager | Pageant Pro"
      pageDescription="Streamline the management of your pageant platform and community service efforts. From building your statement to tracking engagements."

      title="Platform & Community Service Manager"
      subtitle="Organize, build, and showcase your platform and community service engagements effectively."
      mainImg="/images/community-service.png"
      features={[
        { name: 'Platform Organizer', icon: ClipboardDocumentCheckIcon, description: 'Organize your advocacy platform and key messages in one place.' },
        { name: 'Statement Builder', icon: PencilIcon, description: 'Craft a compelling platform statement with our guided builder.' },
        { name: 'Resume/Bio Builder', icon: DocumentTextIcon, description: 'Create professional resumes and bios that highlight your achievements and platform.' },
        { name: 'Community Service Tracker', icon: FaHandsHelping, description: 'Track your community service hours and activities with ease.' },
        { name: 'Image & Media Storage', icon: CameraIcon, description: 'Store and manage images and media related to your platform and service activities.' },
        { name: 'Article & Press Saver', icon: RiArticleLine, description: 'Save articles, press mentions, and related content about your platform.' },
        { name: 'Service Project Planner', icon: CalendarIcon, description: 'Plan and organize your community service projects and initiatives.' },
        { name: 'Engagement & Outreach Folder', icon: FolderOpenIcon, description: 'Keep records of your outreach efforts and engagements for easy access.' }
      ]}
      offerTitle="Empower Your Pageant Platform and Community Service"
      offerSubtitle="Utilize our comprehensive tools to enhance your platform's visibility and impact through structured planning and tracking."
      additionalInfo="Showcase your advocacy and community efforts with a robust set of organizational tools."
      p1="From statement crafting to service tracking, equip yourself with everything needed to amplify your platform."
      p2="Leverage our platform to make a lasting impact in your community while preparing for your pageant journey."
      img1="/images/platform-community-service-demo.png"
    />
  );    
}

export default PlatformCommunityServiceManager;
