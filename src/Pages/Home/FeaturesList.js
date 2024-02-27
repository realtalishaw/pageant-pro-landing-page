import React from 'react';
import FeatureRight from '../../Components/FeatureRight';
import FeatureLeft from '../../Components/FeatureLeft';

const FeaturesList = () => {
  return (
     <div >
      <FeatureRight 
        title='Prepare for your pageant easily with our full set of tools. No stress!'
        description='Pageant Pro has got you covered with a virtual pageant binder that helps you stay on top of things with reminders, budgeting, appearances, and wardrobe planning.'
        img='/images/pageant-binder.png'
        alt='Digital Binder'
        href='/features/digital-binder'
      />
      <FeatureLeft
        title='Effortlessly manage and schedule your appearances with our Appearances Manager.'
        description='Our Appearances Manager allows you to keep track of all your pageant appearances in one convenient place. Say goodbye to the hassle of juggling multiple schedules and hello to a stress-free pageant experience.'
        img='/images/appearances.png'
        alt='Appearances'
        href='/features/appearances'
      />
      <FeatureRight 
        title='Unlock Your Fundraising Potential and Secure Sponsorships with Ease'
        description='Pageant Pro provides contestants with powerful tools to create and manage fundraisers and secure sponsorships. With our platform, you can easily reach out to potential sponsors, track your progress, and maximize your fundraising efforts..'
        img='/images/fundraising.png'
        alt='Fundraising'
        href='/features/fundraising'
      />
      <FeatureLeft
        title='Simplify your pageant prep with our platform and community service project tracker.'
        description='Plan your platform and community service projects seamlessly while easily tracking your volunteer hours.  Ditch the spreadsheets and notebooks – our platform  simplifies the process, letting you focus on making a positive impact.'
        img='/images/community-service.png'
        alt='Platform & Community Service'
        href='/features/platform-community-service'
      />
      <FeatureRight 
        title='Manage all your social media platforms in one convenient place.'
        description='Showcase your journey to the crown and grow your following without the fuss. Our social media management tool allows you to post, engage, and grow your audience without the hassle of switching between platforms.'
        img='/images/social-media.png'
        alt='Social Media Management'
        href='/features/social-media-management'
      />
      <FeatureLeft
        title='Unlock Your Pageant Potential with Training Resources'
        description='Access a wide range of training resources to help you learn, practice, and perfect your pageant skills. From worksheets and videos to AI assistant paperwork review and interview prep, Pageant Pro has everything you need to excel in your pageant journey.'
        img='/images/training-resources.png'
        alt='Training Resources'
        href='/features/training-resources'
      />
      <FeatureRight 
        title='Create Your Own Stunning Titleholder Website'
        description='With Pageant Pro, contestants have the ability to create their own custom website and online store. Showcase your unique style and sell merchandise directly to your supporters.'
        img='/images/titleholder-website.png'
        alt='Titleholder Website'
        href='/features/titleholder-website'
        />
     
    </div>
    );    
}

export default FeaturesList;
