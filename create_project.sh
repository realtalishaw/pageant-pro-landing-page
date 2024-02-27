#!/bin/bash

# Define base directory for the project
BASE_DIR="./src/Pages"

# Create directories for main components/pages
declare -a PAGES=("Home" "About" "Features/DigitalBinder" "Features/TrainingResources" "Features/Appearances" "Features/WebpageBuilder" "Features/SocialMediaManagement" "Features/Fundraising" "Features/PlatformManagement"  "Pricing" "FAQs"  "Blog" "ContactUs")

# Base component structure
COMPONENTS=("index.js")

# Create directories and files
for page in "${PAGES[@]}"
do
   # Create directory
   mkdir -p "$BASE_DIR/$page"
   
   # Create component and style files
   for component in "${COMPONENTS[@]}"
   do
      touch "$BASE_DIR/$page/$component"
   done

   # Add basic React component structure
   echo "import React from 'react';

const ${page##*/} = () => {
  return (
     <div className='bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>${page##*/} Page</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>
    );    
}

export default ${page##*/};" > "$BASE_DIR/$page/index.js"
done

echo "Project structure and basic files created."
