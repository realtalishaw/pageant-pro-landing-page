import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const faqs = [
  {
    question: "What makes Pageant Pro unique in pageant preparation?",
    answer:
      "Pageant Pro is your ultimate digital partner, offering a comprehensive platform that combines traditional pageant preparation with modern technology. From an appearance calendar, pageant paperwork with AI-powered reviews, to a training library and resources for platform/community service project planning, budgeting, and social media management, Pageant Pro provides everything a contestant needs in one digital binder.",
  },
  {
    question: "How can Pageant Pro help me manage my pageant schedule?",
    answer:
      "With Pageant Pro, you can easily organize your pageant prep using our appearance calendar and planner. This allows you to track your schedule, including appearances, training sessions, and important pageant dates, ensuring you're well-prepared and never miss an important event.",
  },
  {
    question: "Can Pageant Pro assist with my pageant paperwork?",
    answer:
      "Absolutely! Pageant Pro offers an AI-powered review system for your pageant paperwork, providing reminders and suggestions to ensure your submissions are complete, accurate, and presented in the best possible way. This feature is designed to streamline the paperwork process, making it less overwhelming and more efficient.",
  },
  {
    question: "What resources does Pageant Pro offer for training and development?",
    answer:
      "Our platform features an extensive training library filled with resources tailored to pageant contestants. From walking and posing tutorials to interview prep and wardrobe selection advice, Pageant Pro has everything you need to excel in every aspect of pageant competition.",
  },
  {
    question: "How can I use Pageant Pro for my platform or community service project?",
    answer:
      "Pageant Pro includes tools for planning and organizing your platform or community service projects. You can set goals, track progress, and manage activities directly within the platform, ensuring your projects are impactful and well-documented.",
  },
  {
    question: "Does Pageant Pro offer features for social media and public relations?",
    answer:
      "Yes, Pageant Pro provides social media management tools, allowing you to schedule posts, manage engagement, and track your online presence. This ensures your social media efforts are consistent, professional, and aligned with your pageant goals.",
  },
  {
    question: "Can I create a personal webpage with Pageant Pro?",
    answer:
      "Indeed, contestants can create a personal webpage showcasing their title, bio, platform, and more. This webpage can also include a blog, fundraiser, or sponsorship page, and even an online store similar to Etsy, offering a comprehensive platform for personal branding and fundraising efforts.",
  },
  // More questions can be added here...
]

const FAQs = () => {
  return (
     <div>
      <Header />
    
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Footer />
    </div>
    );    
}

export default FAQs;
