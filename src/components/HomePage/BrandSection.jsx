// File: /app/components/BrandSection.jsx
export default function BrandSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>
      <div className="text-center">
        <h2 className="text-5xl text-sky-500 font-bold mb-12 -mt-10 tracking-wide">Expand Your Brand</h2>
        <p className="text-justify mx-6 text-lg font-bold text-blue-950 max-w-3xl">
          Your brand is more than just a name. Take it to the next level with creative expertise and technological edge. 
          We give you the ‘X’ factor you are looking for. Why be good when you can be the best?
        </p>
        <button className="shadow-lg mt-16 px-6 py-3 bg-fuchsia-700/80 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-all">
          Explore Now – Brand Creation
        </button>
      </div>
    </section>
  );
}
