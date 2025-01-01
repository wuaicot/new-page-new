import React from "react";

const WhoAreWe = () => {
  return (
    <section className="flex z-10 flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/4725777_19276.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     zIndex: 0,
     
     }}id="who-are-we">
      <h2 className="md:translate-x-40 md:-translate-y-1/4 text-5xl text-sky-500 font-bold mt-60 sm:mb-0 tracking-wide">Who Are We?</h2>
      <p className="md:translate-x-0 lg:translate-x-80  md:-translate-y-1/4 mr-12 text-md font-bold text-blue-950 max-w-3xl  text-right mx-4  sm:mb-0 sm:mt-1 sm:mb-4 text-justify">  
        We, at <span className="text-teal-400">S3A Technologies</span>, are a
        group of highly-qualified and innovative individuals. The ‘S’ in our
        name stands for ‘support’, the ‘A’ for ‘achieving’, and 3 for 3x
        efficiency. That’s how we do it at S3A Technologies!
      </p>
      <p className="lg:translate-x-80 md:translate-x-0 md:-translate-y-1/4 mr-12 text-right text-md font-bold text-blue-950 max-w-3xl mx-4 text-justify">
        With the expertise of IT wizards, we offer the best-in-class digital
        solutions for you and your company. We’re not just here to provide a
        service, we are here to provide solutions. Understanding the current
        market pressures, analyzing your company’s needs, and delivering the
        desired success to your doorstep.
      </p>
      <p className="sm:translate-x-full md:translate-x-0 md:-translate-y-2/3 lg:translate-x-2/4 lg:mr-40  text-right text-md font-bold text-blue-950 max-w-3xl  my-6 mx-12 text-justify">
        But don’t take our word for it, listen to the experienced Technocrats,
        our esteemed clients, and private businesses that swear by us.
      </p>
      <a
        href="#testimonials"
        className="  inline-block px-6 py-1 my-48 bg-teal-400 text-black font-medium rounded hover:bg-teal-500 transition md:translate-x-3/4 md:-translate-y-14
         sm:mb-30  sm:mt-0 sm:mb-30"
      >
        Learn More -- Testimonials
      </a>
    </section>
  );
};

export default WhoAreWe;
