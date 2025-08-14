import profile from '../assets/profile pic.webp'

function Hero() {
  return (
    <section className="relative flex flex-wrap items-center min-h-screen bg-white">
      <div className="flex-1 p-8 text-center md:text-left z-10">
        <h1 className="text-5xl font-bold text-[#002057]">
          Crafting <span className="text-[#ff7b00]">Innovative</span> Solutions
        </h1>
        <p className="mt-4 text-xl text-black">
          Full-stack web developer specializing in ReactJS, Python, and PostgreSQL.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-[#2506ad] text-white font-bold shadow-lg hover:bg-[#1a047e] transition">
          Get in Touch
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center z-10">
        <img
          src={profile}
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;


