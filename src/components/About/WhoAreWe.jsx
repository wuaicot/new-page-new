import React from "react";

const WhoAreWe = () => {
  return (
    <section className="flex z-10 flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/rb_177769.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     zIndex: 0,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
     

     
     }}
     id="who-are-we">
      <div className='justify-center items-center flex flex-col'>
      <h2 className="text-5xl text-center text-sky-500 font-bold mt-40 mb-12 tracking-wide md:-translate-x-1/2 sm:translate-y-8">Who Are We?</h2>
      <p className=" text-md font-bold text-blue-950 max-w-3xl  text-center mb-4 md:-translate-y-1  text-justify text-center tracking-wide sm:mx-20">  
        We, at <span className="text-teal-400">S3A Technologies</span>, are a
        group of highly-qualified and innovative individuals. The ‘S’ in our
        name stands for ‘support’, the ‘A’ for ‘achieving’, and 3 for 3x
        efficiency. That’s how we do it at S3A Technologies!
      </p>
      <p className="sm:mx-20 text-md font-bold text-blue-950 max-w-3xl  text-center mb-12  text-justify text-center tracking-wide
      text-center
      mb-4 md:translate-y-0 md:-translate-y-2">
        With the expertise of IT wizards, we offer the best-in-class digital
        solutions for you and your company. We’re not just here to provide a
        service, we are here to provide solutions. Understanding the current
        market pressures, analyzing your company’s needs, and delivering the
        desired success to your doorstep.
      </p>
      <p className="sm:mx-20 tracking-wide  text-md font-bold text-blue-950 max-w-3xl  text-center mb-4  text-justify text-center sm:-translate-y-12 mb-4 md:-translate-y-2">
        But don’t take our word for it, listen to the experienced Technocrats,
        our esteemed clients, and private businesses that swear by us.
      </p>
      <a
        href="#testimonials"
        className="animate-pulce   inline-block  px-6 py-1  bg-teal-400 text-black font-medium rounded hover:bg-teal-500 transition-full 
         sm:mb-40 
        md:translate-x-3/4 md:-translate-y-80     
         sm:mb-30  sm:mt-0 sm:mb-30 "
         
         
      >
        Learn More -- Testimonials
      </a>
      </div>

      
    </section>
  );
};

export default WhoAreWe;
