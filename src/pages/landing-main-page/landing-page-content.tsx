import * as React from "react";

export const LandingPageContent = () => (
  <div className="landing-page-content">
    <div className="bg-green-800 md:overflow-hidden">
      <div className="px-4 py-20 md:py-4">
        <div className="md:max-w-6xl md:mx-auto">
          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 text-center md:text-left md:pt-16">
              <h1
                className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4"
              >
                Welcome to Forest Nursery - Shop created just for You
              </h1>

              <p className="text-green-800 md:text-xl md:pr-48">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                vitae corrupti asperiores veritatis dolorum, commodi aperiam
                enim.
              </p>

              <a
                href="#"
                className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <svg
        className="fill-current text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
</div>
);
