// File: /app/components/EducationSection.jsx
export default function EducationSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-fixed bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
     backgroundPosition: 'center',
     }}>
      <div className="text-center">
        <h2 className="text-5xl text-sky-500 font-bold mb-6 tracking-wide">Take Education One Step Ahead</h2>
        <p className="text-lg font-bold text-blue-950 max-w-3xl mx-4  my-32 mb-12">
          Get everything in one place, from your modules to your students, 
          with our Learning Management Systems!
        </p>
        <button className="shadow-lg mt-8 mx-4 py-1 bg-emerald-700 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-all">
          Explore Now – Learning Management System (LMS)
        </button>
      </div>
    </section>
  );
}
