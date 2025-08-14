import { useEffect } from 'react'
import profile from '../assets/profile pic.webp'
import 'particles.js/particles'

function Hero() {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#000000' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, color: '#000000', opacity: 0.4 },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      retina_detect: true
    })
  }, [])

  return (
    <section className="relative flex flex-wrap items-center min-h-screen gap-6 px-6 md:px-12 bg-white">
      {/* Particles background */}
      <div className="absolute inset-0" id="particles-js"></div>

      {/* Text content */}
      <div className="flex-1 min-w-[300px] z-10 pt-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#002057]">
          Crafting <span className="text-[#ff7b00]">Innovative</span> Solutions
        </h2>
        <p className="mt-4 text-2xl text-black font-semibold">
          As a <span className="text-red-700">full-stack web developer</span>, I specialize in creating dynamic, responsive apps using ReactJS, Python, and PostgreSQL.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center mt-6 px-8 py-4 rounded-full bg-[#2506ad] text-white font-bold shadow-[0_5px_18px_rgba(48,68,247,0.6)] transition hover:bg-[#1a047e]"
        >
          <span className="text-lg tracking-wide">View My Work</span>
          <i className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1 fas fa-arrow-right"></i>
        </a>

        {/* Social icons */}
        <div className="mt-12 flex space-x-3">
          <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#09011b] text-[#00d9ff] hover:bg-[#0685da]">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#09011b] text-[#00aced] hover:bg-[#00aced] hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#09011b] text-[#007bb6] hover:bg-[#007bb6] hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 min-w-[300px] flex justify-center z-10">
        <img
          src={profile}
          alt="Profile"
          className="w-2/3 md:w-1/2 rounded-full shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
        />
      </div>
    </section>
  )
}

export default Hero

