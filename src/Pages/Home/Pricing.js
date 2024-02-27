import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Raise & Collect Funds for Your Pageant Journey',
  'AI-Powered Pageant Paperwork Review and Mock Interviews',
  'Pageant Mode for quick view of your pageant schedule',
  'Customized personal titleholder website and online store',
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Straightforward Pricing for Lifetime Access</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get full access to all the tools and resources you need for a successful pageant journey. No hidden fees, just one simple payment for lifetime access.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime Membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Unlock your full pageant potential with Pageant Pro. Our platform is designed to support your journey from preparation to performance, ensuring you're always ready to shine.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-pink-400">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-pink-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Invest once, benefit forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$249</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-pink-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Lifetime Access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Seamless company reimbursement with available invoices and receipts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
