"use client"
import { useState, useEffect } from 'react';

const taglines = [
  "Don’t let technology be a barrier. Make it your business carrier!",
  "With S3A Technologies, you don’t just get services, you get solutions!",
  "A to Z IT solutions for every scale of business.",
  "Not just another IT company, we are your innovation partner!",
  "Bridge the gap between your brand and your audience.",
  "The one-stop solution to all your digital problems."
];

export default function SliderTaglines() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500  );
    return () => clearInterval(interval);
  }, []);

  return (
    
      <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/hero-bg.png')",
        backgroundSize: 'cover',
       backgroundPosition: 'center',
       }}>
        <div className="    text-center  " >  
      <h2 className="relative flex items-center justify-center h-screen text-center -mt-40 mx-8 text-2xl font-bold animate-fade-in text-purple-500">{taglines[currentTagline]}</h2>
    </div>
      </section>
    

  );
  

}