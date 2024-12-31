export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/hero-bg.png')",
        backgroundSize: 'cover',
       backgroundPosition: 'center',
       }}>
      <h1 className="text-5xl text-sky-500 font-bold mb-6 tracking-wide">
        Build Something Meaningful
      </h1>
      <p className="text-lg font-bold text-blue-950 max-w-3xl mx-4">
        The first thing someone asks when you talk about your brand is, 
        “Where can I check you out?”. Whether you’re a business or a self-employed individual, the world deserves to know you. 
        With your vision and our technological consulting, let’s place you on the digital map of success!
      </p>
      <button className="shadow-lg mt-8 mx-4 py-0 bg-orange-600 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-all">
        Get Started Now – Website Pro and App Development
      </button>
    </section>
  );
}
