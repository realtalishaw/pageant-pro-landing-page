import React from 'react';
import Layout from './Layout';
import {
  UsersIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
  PaperAirplaneIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { AiFillFileText, AiFillSafetyCertificate } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

const PageantDirector = () => {
  return (
    <Layout
      pageTitle="Contestant Management | Pageant Pro"
      pageDescription="Simplify your pageant management process. Track registrations, payments, and submissions, and communicate securely with contestants."

      title="Contestant Management for Pageant Directors"
      subtitle="Partner with Pageant Pro to streamline contestant management. From registration to feedback, handle it all effortlessly."
      mainImg="/images/pageant-director.png"
      features={[
        { name: 'Contestant Registration', icon: UsersIcon, description: 'Easily track contestant registration and manage participant details.' },
        { name: 'Payment Tracking', icon: CreditCardIcon, description: 'Monitor registration fees, payments, and financial transactions seamlessly.' },
        { name: 'Document Management', icon: AiFillFileText, description: 'Collect and organize contestant paperwork, forms, and essential documents.' },
        { name: 'Real-Time Messaging', icon: ChatBubbleBottomCenterTextIcon, description: 'Communicate with contestants directly through secure real-time messaging.' },
        { name: 'Score Delivery', icon: ShieldCheckIcon, description: 'Securely deliver scores, feedback, and results to contestants and judges.' },
        { name: 'Form Submission', icon: ClipboardDocumentIcon, description: 'Have contestants submit required forms and documents effortlessly.' },
        // Additional icons for specific functionalities
        { name: 'Secure Platform', icon: AiFillSafetyCertificate, description: 'Ensure all data and communications are secure and protected.' },
        { name: 'Payment Solutions', icon: MdPayment, description: 'Utilize integrated payment solutions for easy fee collection and management.' },
      ]}
      offerTitle="Enhance Your Pageant Experience"
      offerSubtitle="Leverage Pageant Pro's comprehensive management tools to enhance efficiency and contestant satisfaction."
      additionalInfo="From streamlined registrations to insightful feedback, make every aspect of your pageant outstanding."
      p1="Adopt a centralized platform for managing all contestant-related activities, saving time and reducing hassle."
      p2="Utilize advanced tools to ensure a smooth, professional, and secure pageant process for directors and contestants alike."
      img1="/images/pageant-director-demo.png"
    />
  );    
}

export default PageantDirector;
