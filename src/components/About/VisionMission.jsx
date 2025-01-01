










import React from "react";
//import "globals.css";
import "tailwindcss/tailwind.css";


const VisionMission = () => {
  return (
    <section className="flex z-10 flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/rb_177769.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 0,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
    }}>
      <h2 className="text-4xl font-bold text-indigo-800 mb-2 -mt-4 animate-bounce x">Vision & Mission</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-teal-400 animate-pulse">Vision</h3>
        <p className="text-lg leading-relaxed text-slate-900 tracking-wide text-md text-center text-justify mx-20 mt-2 t"> Our vision is to put each one of you on the map of success with the unique power of digital technology. </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-teal-400 animate-pulse -translate-y-10">Mission</h3>
        <p className="text-lg leading-relaxed text-slate-900 tracking-wide  text-md text-center text-justify mx-20 -translate-y-8">
          To provide state-of-the-art scalable IT solutions that give you a
          competitive edge in the world of business and technology.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
