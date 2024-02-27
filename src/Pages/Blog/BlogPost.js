import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BlogPost = () => {
  return (
    <>
  <main className="pb-16 lg:pb-24 bg-white  antialiased">
    <Header />
    <header className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">

        <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
          Flowbite Blocks Tutorial - Learn how to get started with custom
          sections using the Flowbite Blocks
        </h1>
        <p className="text-lg font-normal text-gray-300">
          Before going digital, you might scribbling down some ideas in a
          sketchbook.
        </p>
      </div>
    </header>
    <div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white  rounded xl:-m-32 xl:p-9 xl:mx-auto">
      <article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <div className="flex flex-col mb-6 lg:flex-row justify-between lg:items-center">
          <div className="flex items-center space-x-3 text-gray-500  text-base mb-2 lg:mb-0">
            <span>
              By{" "}
              <a
                href="#"
                className="text-gray-900 dark: hover:underline no-underline font-semibold"
              >
                Jese Leos
              </a>
            </span>
            <span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full" />
            <span>
              <time
                className="font-normal text-gray-500 "
                pubdate=""
                dateTime="2022-03-08"
                title="August 3rd, 2022"
              >
                August 3, 2022, 2:20am EDT
              </time>
            </span>
          </div>
          <aside aria-label="Share social media">
            <div className="not-format">
              <button
                data-tooltip-target="tooltip-facebook"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  "
                type="button"
              >
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="tooltip-facebook"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip d"
              >
                Share on Facebook
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-twitter"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50 "
                type="button"
              >
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  />
                </svg>
              </button>
              <div
                id="tooltip-twitter"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share on Twitter
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              
              <button
                data-tooltip-target="tooltip-link"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark: focus:ring-gray-50  "
                type="button"
              >
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                  />
                </svg>
              </button>
              <div
                id="tooltip-link"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Share link
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              
            </div>
          </aside>
        </div>
        <p className="lead">
          Flowbite is an open-source library of UI components built with the
          utility-first classes from Tailwind CSS. It also includes interactive
          elements such as dropdowns, modals, datepickers.
        </p>
        <p>
          Before going digital, you might benefit from scribbling down some
          ideas in a sketchbook. This way, you can think things through before
          committing to an actual design project.
        </p>
        <p>
          But then I found a{" "}
          <a href="https://flowbite.com">
            component library based on Tailwind CSS called Flowbite
          </a>
          . It comes with the most commonly used UI components, such as buttons,
          navigation bars, cards, form elements, and more which are conveniently
          built with the utility classes from Tailwind CSS.
        </p>
        <figure>
          <img
            src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
            alt=""
            className="mx-auto"
          />
          <figcaption>Digital art by Anonymous</figcaption>
        </figure>
        <h2>Getting started with Flowbite</h2>
        <p>
          First of all you need to understand how Flowbite works. This library
          is not another framework. Rather, it is a set of components based on
          Tailwind CSS that you can just copy-paste from the documentation.
        </p>
        <p>
          It also includes a JavaScript file that enables interactive
          components, such as modals, dropdowns, and datepickers which you can
          optionally include into your project via CDN or NPM.
        </p>
        <p>
          You can check out the{" "}
          <a href="https://flowbite.com/docs/getting-started/quickstart/">
            quickstart guide
          </a>{" "}
          to explore the elements by including the CDN files into your project.
          But if you want to build a project with Flowbite I recommend you to
          follow the build tools steps so that you can purge and minify the
          generated CSS.
        </p>
        <p>
          You'll also receive a lot of useful application UI, marketing UI, and
          e-commerce pages that can help you get started with your projects even
          faster. You can check out this{" "}
          <a href="https://flowbite.com/docs/components/tables/">
            comparison table
          </a>{" "}
          to better understand the differences between the open-source and pro
          version of Flowbite.
        </p>
        <h2>When does design come in handy?</h2>
        <p>
          While it might seem like extra work at a first glance, here are some
          key moments in which prototyping will come in handy:
        </p>
        <ol>
          <li>
            <strong>Usability testing</strong>. Does your user know how to exit
            out of screens? Can they follow your intended user journey and buy
            something from the site you’ve designed? By running a usability
            test, you’ll be able to see how users will interact with your design
            once it’s live;
          </li>
          <li>
            <strong>Involving stakeholders</strong>. Need to check if your GDPR
            consent boxes are displaying properly? Pass your prototype to your
            data protection team and they can test it for real;
          </li>
          <li>
            <strong>Impressing a client</strong>. Prototypes can help explain or
            even sell your idea by providing your client with a hands-on
            experience;
          </li>
          <li>
            <strong>Communicating your vision</strong>. By using an interactive
            medium to preview and test design elements, designers and developers
            can understand each other — and the project — better.
          </li>
        </ol>
        <h3>Laying the groundwork for best design</h3>
        <p>
          Before going digital, you might benefit from scribbling down some
          ideas in a sketchbook. This way, you can think things through before
          committing to an actual design project.
        </p>
        <p>
          Let's start by including the CSS file inside the <code>head</code> tag
          of your HTML.
        </p>
        <h3>Understanding typography</h3>
        <h4>Type properties</h4>
        <p>
          A typeface is a collection of letters. While each letter is unique,
          certain shapes are shared across letters. A typeface represents shared
          patterns across a collection of letters.
        </p>
        <h4>Baseline</h4>
        <p>
          A typeface is a collection of letters. While each letter is unique,
          certain shapes are shared across letters. A typeface represents shared
          patterns across a collection of letters.
        </p>
        <h4>Measurement from the baseline</h4>
        <p>
          A typeface is a collection of letters. While each letter is unique,
          certain shapes are shared across letters. A typeface represents shared
          patterns across a collection of letters.
        </p>
        <h3>Type classification</h3>
        <h4>Serif</h4>
        <p>
          A serif is a small shape or projection that appears at the beginning
          or end of a stroke on a letter. Typefaces with serifs are called serif
          typefaces. Serif fonts are classified as one of the following:
        </p>
        <h4>Old-Style serifs</h4>
        <ul>
          <li>Low contrast between thick and thin strokes</li>
          <li>Diagonal stress in the strokes</li>
          <li>Slanted serifs on lower-case ascenders</li>
        </ul>
        <img
          src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
          alt=""
        />
        <ol>
          <li>Low contrast between thick and thin strokes</li>
          <li>Diagonal stress in the strokes</li>
          <li>Slanted serifs on lower-case ascenders</li>
        </ol>
        <h3>Laying the best for successful prototyping</h3>
        <p>
          A serif is a small shape or projection that appears at the beginning:
        </p>
        <blockquote>
          <p>
            Flowbite is just awesome. It contains tons of predesigned components
            and pages starting from login screen to complex dashboard. Perfect
            choice for your next SaaS application.
          </p>
        </blockquote>
        <h4>Code example</h4>
        <p>
          A serif is a small shape or projection that appears at the beginning
          or end of a stroke on a letter. Typefaces with serifs are called serif
          typefaces. Serif fonts are classified as one of the following:
        </p>
        <pre>
          <code className="language-html">
            &lt;dl class="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900
            sm:grid-cols-3 dark:"&gt;{"\n"}&lt;div class="flex
            flex-col justify-center items-center"&gt;{"\n"}
            {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
            {"\n"}
            {"  "}&lt;dd class="text-lg font-normal text-gray-500
            "&gt;developers&lt;/dd&gt;{"\n"}&lt;/div&gt;{"\n"}
            &lt;div class="flex flex-col justify-center items-center"&gt;{"\n"}
            {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
            {"\n"}
            {"  "}&lt;dd class="text-lg font-normal text-gray-500
            "&gt;contributors&lt;/dd&gt;{"\n"}&lt;/div&gt;
            {"\n"}&lt;div class="flex flex-col justify-center items-center"&gt;
            {"\n"}
            {"  "}&lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
            {"\n"}
            {"  "}&lt;dd class="text-lg font-normal text-gray-500
            "&gt;organizations&lt;/dd&gt;{"\n"}&lt;/div&gt;
            {"\n"}&lt;/dl&gt;{"\n"}
          </code>
        </pre>
        <h4>Table example</h4>
        <p>
          A serif is a small shape or projection that appears at the beginning
          or end of a stroke on a letter.
        </p>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Date &amp; Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United States</td>
              <td>April 21, 2021</td>
              <td>
                <strong>$2,300</strong>
              </td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>May 31, 2021</td>
              <td>
                <strong>$300</strong>
              </td>
            </tr>
            <tr>
              <td>United Kingdom</td>
              <td>June 3, 2021</td>
              <td>
                <strong>$2,500</strong>
              </td>
            </tr>
            <tr>
              <td>Australia</td>
              <td>June 23, 2021</td>
              <td>
                <strong>$3,543</strong>
              </td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>July 6, 2021</td>
              <td>
                <strong>$99</strong>
              </td>
            </tr>
            <tr>
              <td>France</td>
              <td>August 23, 2021</td>
              <td>
                <strong>$2,540</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Best practices for setting up your prototype</h3>
        <p>
          <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
          close a prototype will be to the real deal. If you’re simply preparing
          a quick visual aid for a presentation, a low-fidelity prototype — like
          a wireframe with placeholder images and some basic text — would be
          more than enough. But if you’re going for more intricate usability
          testing, a high-fidelity prototype — with on-brand colors, fonts and
          imagery — could help get more pointed results.
        </p>
        <p>
          <strong>Consider your user</strong>. To create an intuitive user flow,
          try to think as your user would when interacting with your product.
          While you can fine-tune this during beta testing, considering your
          user’s needs and habits early on will save you time by setting you on
          the right path.
        </p>
        <p>
          <strong>Start from the inside out</strong>. A nice way to both
          organize your tasks and create more user-friendly prototypes is by
          building your prototypes ‘inside out’. Start by focusing on what will
          be important to your user, like a Buy now button or an image gallery,
          and list each element by order of priority. This way, you’ll be able
          to create a prototype that puts your users’ needs at the heart of your
          design.
        </p>
        <p>
          And there you have it! Everything you need to design and share
          prototypes — right in Flowbite Figma.
        </p>
      </article>
      <aside className="hidden xl:block" aria-labelledby="sidebar-label">
        <div className="xl:w-[336px] sticky top-6">
          <h3 id="sidebar-label" className="sr-only">
            Sidebar
          </h3>
       
          <div className="mb-12">
            <h4 className="mb-4 text-sm font-bold text-gray-900 dark: uppercase">
              Latest news
            </h4>
            <div className="mb-6 flex items-center">
              <a href="#" className="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                  className="mr-4 max-w-full w-24 h-24 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <div>
                <h5 className="mb-2 text-lg font-bold leading-tight dark: text-gray-900">
                  Our first office
                </h5>
                <p className="mb-2 text-gray-500 ">
                  Over the past year, Volosoft has undergone changes.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 9 minutes
                </a>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <a href="#" className="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                  className="mr-4 max-w-full w-24 h-24 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <div>
                <h5 className="mb-2 text-lg font-bold leading-tight dark: text-gray-900">
                  Enterprise Design tips
                </h5>
                <p className="mb-2 text-gray-500 ">
                  Over the past year, Volosoft has undergone changes.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 14 minutes
                </a>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <a href="#" className="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                  className="mr-4 max-w-full w-24 h-24 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <div>
                <h5 className="mb-2 text-lg font-bold leading-tight dark: text-gray-900">
                  Partnered up with Google
                </h5>
                <p className="mb-2 text-gray-500 ">
                  Over the past year, Volosoft has undergone changes.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 9 minutes
                </a>
              </div>
            </div>
          </div>
       
        </div>
      </aside>
    </div>
  </main>
  <aside
    aria-label="Related articles"
    className="py-8 lg:py-24 bg-white "
  >
    <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:">
        Related articles
      </h2>
      <div className="grid gap-6 lg:gap-12 md:grid-cols-2">
        <article className="flex flex-col xl:flex-row">
          <a href="#" className="mb-2 xl:mb-0">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
              className="mr-5 max-w-sm"
              alt="Image 1"
            />
          </a>
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:">
              <a href="#">Our first office</a>
            </h2>
            <p className="mb-4 text-gray-500  max-w-sm">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              Read in 2 minutes
            </a>
          </div>
        </article>
        <article className="flex flex-col xl:flex-row">
          <a href="#" className="mb-2 xl:mb-0">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
              className="mr-5 max-w-sm"
              alt="Image 2"
            />
          </a>
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:">
              <a href="#">Enterprise design tips</a>
            </h2>
            <p className="mb-4 text-gray-500  max-w-sm">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              Read in 12 minutes
            </a>
          </div>
        </article>
        <article className="flex flex-col xl:flex-row">
          <a href="#" className="mb-2 xl:mb-0">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
              className="mr-5 max-w-sm"
              alt="Image 3"
            />
          </a>
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:">
              <a href="#">We partnered up with Google</a>
            </h2>
            <p className="mb-4 text-gray-500  max-w-sm">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              Read in 8 minutes
            </a>
          </div>
        </article>
        <article className="flex flex-col xl:flex-row">
          <a href="#" className="mb-2 xl:mb-0">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
              className="mr-5 max-w-sm"
              alt="Image 4"
            />
          </a>
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:">
              <a href="#">Our first project with React</a>
            </h2>
            <p className="mb-4 text-gray-500  max-w-sm">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
              Read in 12 minutes
            </a>
          </div>
        </article>
      </div>
    </div>
  </aside>
  <section className="bg-gray-50 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl ">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center  rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
            We care about the protection of your data.{" "}
            <a
              href="#"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  </section>
<Footer />

</>

  );
}
export default BlogPost;