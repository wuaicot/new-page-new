import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center ">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/Abstract_Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10">
        <h1 className="text-5xl text-sky-500 font-bold mb-6 tracking-wide">
          Build Something Meaningful
        </h1>
        <p className="text-justify text-lg font-bold text-blue-950 max-w-3xl mx-4 my-12 pb-10">
          The first thing someone asks when you talk about your brand is, “Where
          can I check you out?”. Whether you’re a business or a self-employed
          individual, the world deserves to know you. With your vision and our
          technological consulting, let’s place you on the digital map of
          success!
        </p>
        <button className="sm:absolute shadow-lg mt-8 py-1 px-4 bg-orange-600 hover:bg-blue-600 text-white rounded-lg text-lg font-medium  mx-8 sm:-my-20 animate-pulse">
          Get Started Now – Website Pro and App Development
        </button>
      </div>
    </section>
  );
}
