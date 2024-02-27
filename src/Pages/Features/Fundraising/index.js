import React from 'react';
import Layout from '../Layout';
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  ClipboardListIcon,
  HeartIcon,
  EnvelopeIcon,
  ChartBarIcon,
  GiftIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { BsGraphUp } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";

const FundraisingSponsorshipManager = () => {
  return (
    <Layout
      pageTitle="Fundraising & Sponsorship Manager | Pageant Pro"
      pageDescription="Maximize your fundraising and sponsorship efforts with our comprehensive management tool. Create campaigns, track donations, and manage sponsor relationships with ease."

      title="Fundraising & Sponsorship Manager"
      subtitle="Empower your fundraising and sponsorship campaigns. Keep 100% of your earnings, minus credit card fees."
      mainImg="/images/fundraising.png"
      features={[
        { name: 'Create Fundraisers', icon: HeartIcon, description: 'Launch your own fundraising campaigns to support your pageant journey.' },
        { name: 'Sponsorship Packages', icon: GiftIcon, description: 'Generate attractive sponsorship packages to entice potential sponsors.' },
        { name: 'Donation Tracking', icon: CurrencyDollarIcon, description: 'Keep track of incoming donations and sponsorship funds in real-time.' },
        { name: 'Financial Management', icon: CreditCardIcon, description: 'Manage all transactions securely, with transparent processing fees.' },
        { name: 'Thank You Notes', icon: EnvelopeIcon, description: 'Send personalized thank you notes directly from your dashboard to donors and sponsors.' },
        { name: 'Analytics & Reporting', icon: BsGraphUp, description: 'Gain insights into your fundraising efforts with detailed analytics and reports.' },
        { name: 'Achievement Recognition', icon: CheckCircleIcon, description: 'Celebrate and showcase your fundraising milestones and sponsor recognitions.' },
        { name: 'Efficient Sponsorship Handling', icon: FaHandHoldingUsd, description: 'Streamline the management of sponsor relations and contributions.' }
      ]}
      offerTitle="Enhance Your Fundraising & Sponsorship Journey"
      offerSubtitle="Leverage our tools to streamline your fundraising efforts and build strong sponsor relationships."
      additionalInfo="Keep 100% of your fundraising and sponsorship earnings, less any credit card processing fees."
      p1="Utilize our platform to create impactful fundraising campaigns and attractive sponsorship packages."
      p2="Efficiently manage donations, sponsorships, and acknowledgements, all from one comprehensive dashboard."
      img1="/images/fundraising-sponsorship-demo.png"
    />
  );    
}

export default FundraisingSponsorshipManager;
