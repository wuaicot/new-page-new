// File: /app/components/BrandSection.jsx
export default function BrandSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>

      <div className="text-center  max-w-3xl mx-auto">
        <h2 className="text-5xl text-sky-500 font-bold sm:mb-20 sm:-mt-20 tracking-wide">Expand Your Brand</h2>

        <p className="text-justify mx-6 text-lg sm:-my-20 font-bold text-blue-950 max-w-3xl">
          Your brand is more than just a name. Take it to the next level with creative expertise and technological edge. 
          We give you the ‘X’ factor you are looking for. Why be good when you can be the best?
        </p>       
      </div>
      
      <button className=" shadow-lg mt-16 px-6 py-3 bg-fuchsia-700/80 animate-pulse hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-all sm:translate-my-20">
          Explore Now – Brand Creation
        </button>

    </section>
  );
}
