import * as React from "react";

export const LandingPageDescription = () => (
  <div className = "landing-page-description">
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
);
