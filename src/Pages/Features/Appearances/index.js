import React from 'react';
import Layout from '../Layout';
import {
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ChatAlt2Icon,
  GlobeAltIcon,
  PencilIcon,
  PaperAirplaneIcon,
  InformationCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { BsBriefcaseFill } from "react-icons/bs";
import { MdOutlineFeedback } from "react-icons/md";

const AppearanceTracker = () => {
  return (
    <Layout
      pageTitle="Pageant Appearances Tracker | Pageant Pro"
      pageDescription="Efficiently manage and keep track of your appearances with our comprehensive tracker. From request handling to detailed planning and feedback collection, streamline your event participations."

      title="Track Your Pageant Appearances"
      subtitle="Manage and keep track of your appearances with ease. Ensure every event is a success."
      mainImg="/images/appearances.png"
      features={[
        { name: 'Appearance Requests', icon: ClipboardDocumentCheckIcon, description: 'Manage incoming requests for appearances and organize them efficiently.' },
        { name: 'Event Calendar', icon: CalendarIcon, description: 'Visualize and plan your schedule with an easy-to-use calendar.' },
        { name: 'Travel & Accommodation', icon: PaperAirplaneIcon, description: 'Keep track of your travel plans and accommodation details for each appearance.' },
        { name: 'Appearance Details', icon: GlobeAltIcon, description: 'Access detailed information about each appearance, including venue, time, and contact info.' },
        { name: 'Notes & Reminders', icon: PencilIcon, description: 'Jot down important notes and set reminders for preparation tasks.' },
        { name: 'Feedback Collection', icon: MdOutlineFeedback, description: 'Gather and review feedback post-appearance to improve future events.' },
      ]}
      offerTitle="Elevate Your Appearance Management"
      offerSubtitle="Utilize our Appearance Tracker to streamline your event participation and enhance your professional presence."
      additionalInfo="Maximize your event impact with strategic planning and insights."
      p1="Transition to a digital solution that supports your dynamic scheduling and appearance management needs."
      p2="Leverage technology to ensure every appearance is impactful, well-managed, and contributes to your professional growth."
      img1="/images/appearance-tracker-demo.png"
    />
  );    
}

export default AppearanceTracker;
