import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CTA from '../../Components/CTA';
import useSEO from '../../hooks/useSEO';
import GetAccess from '../../Components/GetAccess';

  export default function Layout(props) {
    useSEO({
      title: props.pageTitle,
      description: props.pageDescription,
    });
  
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
         <GetAccess />
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
         <GetAccess />
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
    <CTA />
        <Footer />
        </div>
    )
  }
  