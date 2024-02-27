import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does Pageant Pro help me win my pageant?",
    answer:
      "Pageant Pro gives you everything you need to shine. Track your progress, perfect your interview skills, manage your social media presence, and build a community service platform that makes a difference."
  },
  {
    question: "I'm not very tech-savvy. Is Pageant Pro easy to use?",
    answer: 
      "Absolutely! We designed Pageant Pro to be user-friendly for contestants of all experience levels. Our intuitive interface and clear guides make it a breeze to navigate." 
  },
  {
    question: "What features does Pageant Pro offer?",
    answer:
      "Pageant Pro is packed with tools to help you succeed, including a platform builder, interview prep guides, social media analytics, progress tracking, and more!"
  },
  {
    question: "Does Pageant Pro offer support if I have questions?",
    answer:
      "Yes! Our dedicated customer support team is here to help. You can access tutorials, reach out through our help center, or even connect with a Pageant Pro coach."
  } 
]



export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6  lg:px-8 ">
        <div className="mx-auto  divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
