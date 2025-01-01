
export default function ReputationSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>
      <div className="text-center ">
        <h2 className="text-5xl text-sky-500 font-bold mt-0 mb-10 tracking-wide">Enhance Your Reputation</h2>
        <p className="text-justify text-lg font-bold text-blue-950 max-w-3xl mx-8 my-8">
          People believe what they ‘see’. Revolutionise your online identity with our digital marketing and ORM services 
          to reach the next level!
        </p>
        <button className="shadow-lg mt-8 px-4 sm:py-2
        sm:mt-0 bg-purple-700 hover:bg-blue-600 text-white rounded-lg text-lg font-medium animate-pulse transition-all">
          Explore Now – Digital Marketing and ORM
        </button>
      </div>
    </section>
  );
}
