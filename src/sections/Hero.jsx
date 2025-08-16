import profile from '../assets/profile pic.webp'
import { ArrowBigDown } from 'lucide-react';
import { handleScroll } from '../hooks/handleScroll';
import { ReactTyped } from 'react-typed';

function Hero() {
  return (
    <div id='home' className="relative flex flex-wrap items-center min-h-screen bg-gray-100 rounded-lg shadow-lg">
      <div className="flex-1 p-8 text-center md:text-left z-10 ml-4">
        <h1 className="text-5xl font-bold text-[#002057]">
          Hi there I'm <span className="text-[#ff7b00]">Ernest Kamau</span>
        </h1>
        <p className="mt-4 text-xl text-black mb-2">
          I'm a{" "}
          <ReactTyped
            strings={[
              "Web Developer",
              "Full-Stack Developer",
              "Backend Developer",
              "Software Developer",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </p>
        <p>I build modern websites, Softwares and backend systems that are fast, responsive, and secure </p>

        <div className='flex flex-col md:flex-row gap-4 mt-6'>
          {/* <button
            onClick={()=>handleScroll('about-me')}
            className="flex m-2 px-6 py-3 rounded-full bg-[#2506ad] text-white font-bold shadow-lg hover:bg-[#1a047e] transition"
          >
            About Me <ArrowBigDown/>
          </button> */}

          <button
            onClick={() => handleScroll('contact')}
            className="flex m-2 px-6 py-3 rounded-full bg-[#ff7b00] text-white font-bold shadow-lg hover:bg-[#e66a00] transition"
          >
            Contact Me
          </button>

          <a 
            href="/Ernest Kamau CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex m-2 w-30 text-center justify-center bg-blue-600 text-white px-6 py-3 font-bold rounded-full hover:bg-blue-700 transition"
          >
            View CV
          </a>
        </div>
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


