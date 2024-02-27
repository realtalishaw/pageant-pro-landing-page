import React from 'react';
import Layout from '../Layout';
import {
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  BellIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { BsAirplane } from "react-icons/bs";
import { PiDress } from "react-icons/pi";

const DigitalBinder = () => {
  return (
    <Layout
      pageTitle="Digital Pageant Binder | Pageant Pro"
      pageDescription="Your all-in-one digital pageant binder. From packing lists to wardrobe planning, schedules, and reminders, we’ve streamlined your pageant preparation."

      title="Digital Pageant Binder"
      subtitle="Organize and prepare for your pageant seamlessly with our digital binder."
      mainImg="/images/pageant-binder.png"
      features={[
        { name: 'Packing List', icon: ClipboardDocumentCheckIcon, description: 'Comprehensive packing lists ensure you never forget a thing.' },
        { name: 'Schedule', icon: CalendarIcon, description: 'Keep track of your pageant schedule and appearances in one place.' },
        { name: 'Reminders & Deadlines', icon: BellIcon, description: 'Automated reminders for all your important deadlines and paperwork.' },
        { name: 'Budget Tracker', icon: CurrencyDollarIcon, description: 'Monitor your expenses and manage your budget efficiently.' },
        { name: 'Wardrobe Planner', icon: PiDress, description: 'Create mood boards for different competition areas and plan your outfits.' },
        { name: 'Trip Details', icon: BsAirplane, description: 'Easily save and access your flight or hotel information.' },
        { name: 'Preparation Timeline', icon: ClockIcon, description: 'Outline tasks and milestones with a custom timeline for pageant preparation.' }
      ]}
      offerTitle="Streamline Your Pageant Preparation"
      offerSubtitle="Leverage the full potential of our digital pageant binder to organize and execute your preparation with ease."
      additionalInfo="Embrace the digital evolution of pageant preparation."
      p1="Transition from traditional binders to a comprehensive, secure, and interactive digital platform."
      p2="Effortlessly manage every aspect of your pageant journey, from wardrobe to schedules, with our innovative digital binder."
      img1="/images/productDemo.png"
    />
  );    
}

export default DigitalBinder;
