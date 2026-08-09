import Navbar from "./assets/components/Navbar"
import AboutMe from "./sections/AboutMe"
import { ContactMe } from "./sections/ContactMe"
import { Experience } from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Intro from "./sections/Intro"
import Projects from "./sections/Projects"
import { Technology } from "./sections/Technology"


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main >
        <Home />
        <Intro />
        <Projects />
        <AboutMe />
        <Technology />
        <Experience />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
