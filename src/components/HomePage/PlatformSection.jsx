// File: /app/components/PlatformSection.jsx
export default function PlatformSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>
      <div className="text-center">
        <h2 className="text-5xl text-sky-500 font-bold mb-6 tracking-wide">Create Your Own Platform</h2>
        <p className="text-justify text-lg font-bold text-blue-950 max-w-3xl mx-4 my-28">
          Wish you could have your products and services in one place? 
          With our secure IT solutions, have your own web and mobile application set up in no time.
        </p>
        <button className="mt-8 px-6 py-1 mx-4 bg-cyan-700 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-all">
          Explore Now – Web Application and Mobile Application
        </button>
      </div>
    </section>
  );
}
