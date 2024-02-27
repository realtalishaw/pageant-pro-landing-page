import React from 'react';
import Layout from '../Layout';
import {
  VideoCameraIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  PhoneIcon,
  ScaleIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { MdOutlineFitnessCenter, MdOutlineFastfood } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const TrainingResources = () => {
  return (
    <Layout
      pageTitle="Training Resources | Pageant Pro"
      pageDescription="Access an extensive library of training resources designed for pageant success. From videos and worksheets to live classes and a comprehensive vendor directory."

      title="Training Resources"
      subtitle="Enhance your pageant preparation with curated training materials and resources."
      mainImg="/images/training-resources.png"
      features={[
        { name: 'Video Library', icon: VideoCameraIcon, description: 'Explore a wide range of training videos for various pageant skills.' },
        { name: 'Worksheets & Guides', icon: DocumentTextIcon, description: 'Download worksheets and guides to reinforce learning.' },
        { name: 'Live Classes', icon: UserGroupIcon, description: 'Participate in live classes and workshops with industry experts.' },
        { name: 'Goal Setting', icon: ClipboardDocumentCheckIcon, description: 'Set and track your pageant preparation goals effectively.' },
        { name: 'Food & Fitness Journal', icon: MdOutlineFastfood, description: 'Maintain a healthy regimen with a personalized food and fitness journal.' },
        { name: 'Notes from Loved Ones', icon: HeartIcon, description: 'Keep motivational notes from your supporters close.' },
        { name: 'Contact Management', icon: PhoneIcon, description: 'Organize and save important contacts within the pageant industry.' },
        { name: 'Vendor Directory', icon: BriefcaseIcon, description: 'Find and connect with a variety of pageant-related vendors.' },
        // Additional icons for detailed features
        { name: 'Fitness Tracking', icon: MdOutlineFitnessCenter, description: 'Track your fitness progress and routines.' },
        { name: 'Personal Notes', icon: BsPencilSquare, description: 'Write down personal reflections and notes during your preparation.' },
      ]}
      offerTitle="Unlock Your Pageant Potential"
      offerSubtitle="Dive into a treasure trove of resources tailored to boost your preparation and performance."
      additionalInfo="With Pageant Pro's Training Resources, you're equipped with everything needed for a successful pageant journey."
      p1="Leverage expert knowledge through our curated resources, setting a solid foundation for your pageant success."
      p2="From physical fitness to mental preparation, our comprehensive tools and resources are designed to cover all aspects of your pageant journey."
      img1="/images/training-resources-demo.png"
    />
  );    
}

export default TrainingResources;
