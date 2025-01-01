export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>
      <h2 className="text-5xl text-sky-500 font-bold mb-0 tracking-wide">Like What You See? Contact Us!

      </h2>

      <p className="text-lg font-bold text-blue-950 max-w-3xl mx-4 mt-12 text-justify">
        Avoid delaying your digital success any more than this. 
        Talk to one of our consultants today and learn how to start leveraging your business.
      </p>
      <button className="shadow-lg mt-8 px-8 py-1 bg-orange-600 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-all animate-pulse">
        Contact Us
      </button>
    </section>
  );
}
