import React from "react";

export default function Problem() {
    return (
        <section className=" mt-24">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pink-400">
      Pageant Prep Can Be Overwhelming
    </h2>
    <p className="text-gray-500 sm:text-xl">
    Juggling endless tasks, tools, and deadlines makes the pageant experience stressful instead of joyful.
    </p>
    <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div>
        <img
          className="mx-auto mb-4 w-12 h-12 text-primary-600 "
            src="/images/icons8-binder-64.png"
            />
        <h3 className="mb-2 text-xl font-bold text-pink-400">
          Ditch the Bulky Binders
        </h3>
        <p className="mb-4 text-gray-500 ">
          Lugging around heavy binders and notebooks is a thing of the past.
        </p>
      </div>
      <div>
      <img
          className="mx-auto mb-4 w-12 h-12 text-primary-600 "
            src="/images/icons8-tools-80.png"
            />
        <h3 className="mb-2 text-xl font-bold text-pink-400">Too Many Tools Cause Chaos</h3>
        <p className="mb-4 text-gray-500 ">
        Using multiple apps and websites for different tasks creates confusion and missed dealines.
        </p>
      
      </div>
      <div>
      <img
          className="mx-auto mb-4 w-12 h-12 text-primary-600 "
            src="/images/icons8-money-80.png"
            />
        <h3 className="mb-2 text-xl font-bold text-pink-400">
          Staying on Budget is a Challenge
        </h3>
        <p className="mb-4 text-gray-500 ">
        Tracking expenses for wardrobe, entry fees, and travel can easily get out of hand.
        </p>
      </div>
    </div>
  </div>
</section>
    )
};