import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AnimatedSection from './AnimatedSection';
import Skills from './sections/Skills';
// import Timeline from './sections/Timeline'
import Projects from './sections/Projects'
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Navbar />
      </div>
      
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Services />
      </AnimatedSection>
      
     
      <AnimatedSection>
        <Skills />
      </AnimatedSection>


     {/* <AnimatedSection>
      <Timeline />
     </AnimatedSection> */}

    
      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
       <Contact/>
      </AnimatedSection>

    </div>
  )
}

export default App
