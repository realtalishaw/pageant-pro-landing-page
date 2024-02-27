import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  FolderIcon,
  Bars3Icon,
  CalendarIcon,
  UsersIcon,
  ShareIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  XMarkIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import GetAccess from './GetAccess'

const features = [
  {
    name: 'Digital Binder',
    description: 'Prepare for your pageant and manage all of your paperwork in one place.',
    href: '/features/digital-binder',
    icon: FolderIcon, 
  },
  {
    name: 'Appearances',
    description: 'Manage and schedule your public appearances with ease.',
    href: '/features/appearances',
    icon: CalendarIcon, 
  },
  {
    name: 'Fundraising',
    description: 'Create your own fundraisers and sponsorships.',
    href: '/features/fundraising',
    icon: BanknotesIcon, 
  },
  {
    name: 'Platform & Community Service',
    description: 'Connect, serve, and make a difference! Plan your platform and community projects seamlessly',
    href: '/features/platform-community-service',
    icon: UsersIcon, 
  },
  {
    name: 'Social Media Management',
    description: 'All your socials, one platform. Post, engage, and grow your following without the fuss.',
    href: '/features/social-media-management',
    icon: ShareIcon,
  },
  {
    name: 'Training Resources',
    description: 'Learn, practice, and perfect your pageant skills.',
    href: '/features/training-resources',
    icon: AcademicCapIcon, 
  },
  {
    name: 'Titleholder Website',
    description: 'Showcase your journey, platform, and more on your personal webpage.',
    href: '/features/titleholder-website',
    icon: GlobeAltIcon, 
  },
];



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex  items-center justify-between p-6 lg:px-24" aria-label="Global">
        <div className="flex lg:flex-1">
        <a
          href="/"
          className="flex items-center justify-between mr-4"
        >
          <img
            src="/images/logo.svg"
            className="mr-3 h-8"
            alt="Pageant Pro logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
          Pageant <span className='text-pink-400'>Pro</span>
          </span>
        </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Features
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {features.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-400" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
        
          <a href="/faqs" className="text-sm font-semibold leading-6 text-gray-900">
            FAQs
          </a>
          <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </a>
          <a href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>

          
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6 items-center ">
        <GetAccess />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
            <a
          href="/"
          className="flex items-center justify-between mr-4"
        >
          <img
            src="/images/logo.svg"
            className="mr-3 h-8"
            alt="Pageant Pro logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Pageant <span className='text-pink-400'>Pro</span>
          </span>
        </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {features.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-400" aria-hidden="true" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
            
                  <a
                    href="/faqs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    FAQs
                  </a>
                  <a
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="/contact-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>

                </div>
                <div className="py-6">
                  <GetAccess />
                </div>
              </div>
            </div>
          </div>
      
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
