import GetAccess from "./GetAccess"

export default function CTA() {
    // Inline styles for radial gradient and shadow
    const gradientStyle = {
        background: "radial-gradient(circle, #F8BBD0, #FF69B4)",
        boxShadow: "0 4px 30px rgba(255, 105, 180, 0.5)", // Adjust the shadow color and spread as needed
    };

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div
            className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16"
            style={gradientStyle} // Apply the gradient and shadow styles here
          >
            <h2 className="mx-auto text-5xl font-bold tracking-tight ">
              Ready to Slay the Stage? 
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
            Effortlessly handle all your pageant needs with Pageant Pro. From appearances to fundraising, we’ve got you covered.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <GetAccess />
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
    )
}
