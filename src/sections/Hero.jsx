import profile from '../assets/profile pic.webp'
import { ArrowBigDown } from 'lucide-react';
import { handleScroll } from '../hooks/handleScroll';

function Hero() {
  return (
    <div className="relative flex flex-wrap items-center min-h-screen bg-white rounded-lg shadow-sm shadow-gray-400">
      <div className="flex-1 p-8 text-center md:text-left z-10 shadow-sm shadow-amber-400 rounded-lg ml-4">
        <h1 className="text-5xl font-bold text-[#002057]">
          Hi there I'm <span className="text-[#ff7b00]">Ernest Kamau</span>
        </h1>
        <p className="mt-4 text-xl text-black">
          I'm a Full-stack web developer.
        </p>
        <button
        onClick={()=>handleScroll('about-me')}
        className="flex gap-2 mt-6 px-6 py-3 rounded-full bg-[#2506ad] text-white font-bold shadow-lg hover:bg-[#1a047e] transition"
        >
          About Me <ArrowBigDown/>
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center z-10">
        <img
          src={profile}
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;


