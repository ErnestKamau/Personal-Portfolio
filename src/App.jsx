import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AnimatedSection from './AnimatedSection';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">

      <div>
        <Navbar />
      </div>

      <AnimatedSection>
        <Hero />
      </AnimatedSection>
     







    </div>
  )
}

export default App
