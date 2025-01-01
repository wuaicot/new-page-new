import React from "react";

const Principles = () => {
  return (
    <section className="py-12 bg-gray-900 text-white px-4 sm:px-6 lg:px-12" id="principles">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
        Our Principles
      </h2>
      <ul className="list-disc list-inside space-y-3 text-sm sm:text-base lg:text-lg">
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
      <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
        Observe, Create, Shape, and Shine — these principles drive us. What we
        do at S3A Technologies is guided by these pillars.
      </p>
    </section>
  );
};

export default Principles;
