import React from "react";
import hero from "../assets/hero.png";
import Avatar from "../assets/Avatar.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src={hero}
        alt=""
        className="absolute inset-[0%]  inline-block lg:h-[100vh] h-[220vh] w-full object-cover"
      />
      {/* Container */}

      {/* Container */}
      <div className="mx-auto relative z-50 w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Heading Content */}
          <div className="max-w-[720px]">
            <p className="text-[#247fff]">
              Without data, you are blind and deaf in a freeway
            </p>
            <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-5xl">
              Get Data at Affordable Prices
              <br />
              <span className="text-[#247fff]">Waradata.com</span>
            </h1>
            <p className="mb-6 max-w-[528px] text-xl text-[#aeaeae] md:mb-10">
              Coming soon, we also offer Dstv, Gotv, Startimes and Electricity
              Subscription.
            </p>
            <div className="flex flex-row gap-4">
              <button
                type="button"
                className="text-white bg-[#247fff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-[#4c4c4c] rounded-lg border border-[#247fff] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Sign In
              </button>
            </div>
          </div>
          {/* Image Div */}
          <div className="p-4 lg:p-0 pt-8 lg:pt-0">
            <div className="bg-[#247fff] lg:h-[414px] lg:w-[514px] w-[97%] h-[310px]  rounded-2xl relative ">
              <img
                src={Avatar}
                alt=""
                className="mx-auto inline-block lg:h-full lg:w-full h-full w-full max-w-[640px] rounded-2xl object-contain "
              />
              <div className="absolute top-[-10%] lg:right-[40%] right-[35%] bg-white p-1 rounded-md">
                <img src={twitter} className="h-[81px]" />
              </div>
              <div className="absolute top-[40%] right-[-10%]  bg-white  p-1 rounded-md">
                <img src={facebook} className="h-[81px]" />
              </div>
              <div className="absolute top-[40%] left-[-10%]  bg-white  p-1 rounded-md">
                <img src={insta} className="h-[81px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
