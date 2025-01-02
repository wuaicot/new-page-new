import React from "react";

const Principles = () => {
  return (
    <section
      className="flex z-10 flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage: "url('/assets/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      id="principles"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center text-indigo-800 -mt-4">
        Our Principles
      </h2>
      <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm lg:text-base text-slate-900">
        <li>
          <strong>Observe:</strong> Your needs and wants.
        </li>
        <li>
          <strong>Create:</strong> Unique solutions to your problems.
        </li>
        <li>
          <strong>Shape:</strong> Your digital identity with our expertise.
        </li>
        <li>
          <strong>Shine:</strong> In this competitive world of marketing.
        </li>
      </ul>
      <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-900 text-justify md:mx-20">
        Observe, Create, Shape, and Shine — these principles drive us. What we
        do at S3A Technologies is guided by these pillars.
      </p>
    </section>
  );
};

export default Principles;
