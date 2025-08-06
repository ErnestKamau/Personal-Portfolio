import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AnimatedSection from './AnimatedSection';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline'

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
      <Skills />
     </AnimatedSection>

     <AnimatedSection>
      <Timeline />
     </AnimatedSection>



    </div>
  )
}

export default App
