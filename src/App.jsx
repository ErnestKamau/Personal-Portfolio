import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AnimatedSection from './AnimatedSection';
import Skills from './sections/Skills';
// import Timeline from './sections/Timeline'
import Projects from './sections/Projects'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Navbar />
      </div>

      <div id='home'>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </div>
      
     <div id='skills'>
      <AnimatedSection>
        <Skills />
     </AnimatedSection>
     </div>

     {/* <AnimatedSection>
      <Timeline />
     </AnimatedSection> */}

     <div id='projects'>
      <AnimatedSection>
        <Projects />
     </AnimatedSection>
     </div>


    </div>
  )
}

export default App
