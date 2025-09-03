import React from "react";
import heroImage from "/images/bgimg.avif"; //<-- update path if needed

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:py-24">
        {/* Left Content */}
        <div>
          {/* Pills */}
          <div className="mb-6 flex flex-wrap gap-3">
            {["Graphics", "UX Design", "Pitch Decks", "Web Design"].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
            World-class
            <br />
            design{" "}
            <span className="italic font-serif">whenevr</span>
            <br />
            you need it.
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            A monthly design subscription for startups, creators, and teams who need work
            done without the wait.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white shadow hover:bg-gray-900"
            >
              See Pricing
            </a>
            <a
              href="#book-call"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-base font-medium text-gray-900 shadow hover:border-gray-400"
            >
              Book a 15-min intro call
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt="Hero Graphic"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <button className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg">
          Buy Template
        </button>
      </div>
    </section>
  );
}