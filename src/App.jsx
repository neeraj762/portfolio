import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Experience from "./components/Experience"
import SkillsRings from "./components/SkillsRings"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <SkillsRings />
      <Projects/>
      <Education />
      <Contact/>
    </div>
  )
}
