import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}