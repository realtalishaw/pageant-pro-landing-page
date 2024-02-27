import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import useSEO from '../../hooks/useSEO';


  export default function Layout(props) {
    useSEO({
      title: props.pageTitle,
      description: props.pageDescription,
    });
    const gradientStyle = {
      background: "radial-gradient(circle, #F8BBD0, #FF69B4)",
      boxShadow: "0 4px 30px rgba(255, 105, 180, 0.5)", // Adjust the shadow color and spread as needed
  };
  
    return (
     <div>
        <Header />
        <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="mt-2 pb-2 text-4xl lg:text-7xl font-bold text-pink-400 sm:text-4xl">{props.title}</h2>
            <p className="mt-6 text-lg leading-8 ">
              {props.subtitle}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src={props.mainImg}
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />

          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7  sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {props.features.map((feature) => {
  const Icon = feature.icon; // Assign the component to a variable with an uppercase first letter
  return (
    <div key={feature.name} className="relative pl-9">
      <dt className="inline font-semibold  pr-2">
        <Icon className="absolute left-1 top-1 h-5 w-5 text-pink-600 " aria-hidden="true" /> {/* Render the component */}
        {feature.name} 
      </dt>
      <dd className="inline">{feature.description}</dd>
    </div>
  );
})}

          </dl>
        </div>
      </div>
      {/* Offer */}
      <div className="px-4 bg-pink-400 ">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative w-full ">
    
        <div className="relative isolate overflow-hidden bg-neutral px-6 py-24 text-center  sm:rounded-3xl sm:px-16 z-">
       
          <h2 className="mx-auto max-w-7xl text-5xl font-bold  sm:text-6xl">
           {props.offerTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
            {props.offerSubtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="relative inline-flex items-center justify-center  group">
     
     <a href="https://buy.stripe.com/bIY6pX1lpexW7m03cc" className=" border border-pink-400 relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-white rounded-full transform transition-transform duration-200 hover:scale-110 hover:bg-pink-400 hover:text-white" role="button">
     👑 Get Pageant Pro for Directors
     </a>
   </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    {/* Additional Information */}
    <div className="overflow-hidden  py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">{props.additionalInfo}</h2>
            <p className="mt-6 text-xl leading-8 ">
             {props.p1}
            </p>
            <p className="mt-6 text-base leading-7 ">
              {props.p2}
            </p>
            <div className="mt-10 flex">
            <a href="https://buy.stripe.com/bIY6pX1lpexW7m03cc" className=" border border-pink-400 relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-white rounded-full transform transition-transform duration-200 hover:scale-110 hover:bg-pink-400 hover:text-white" role="button">
     👑 Get Pageant Pro for Directors
     </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={props.img1}
                alt="screenshot"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl  object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div
            className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16"
            style={gradientStyle} // Apply the gradient and shadow styles here
          >
            <h2 className="mx-auto text-5xl font-bold tracking-tight ">
              Ready to Streamline Your Pageant Backoffice?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
            Pageant Pro empowers directors to manage hundreds of contestants with ease. From registration to feedback, we’ve got you covered.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://buy.stripe.com/bIY6pX1lpexW7m03cc" className=" border border-pink-400 relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-white rounded-full transform transition-transform duration-200 hover:scale-110 hover:bg-pink-400 hover:text-white" role="button">
     👑 Get Pageant Pro for Directors
     </a>
            </div>
            <svg
  viewBox="0 0 1024 1024"
  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
  aria-hidden="true"
>
  <circle cx={512} cy={512} r={512} fill="url(#pink-gradient)" fillOpacity="0.7" />
  <defs>
    <radialGradient id="pink-gradient">
      <stop stopColor="#F8BBD0" /> <stop offset={1} stopColor="#FF69B4" /> 
       </radialGradient>
  </defs>
</svg>
          </div>
        </div>
      </div>
        <Footer />
        </div>
    )
  }
  