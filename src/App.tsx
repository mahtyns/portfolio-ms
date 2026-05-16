import Navbar from "./assets/components/Navbar"
import AboutMe from "./sections/AboutMe"
import { ContactMe } from "./sections/ContactMe"
import { Experience } from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Intro from "./sections/Intro"
import Projects from "./sections/Projects"
import Stack from "./sections/Stack"


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main >
        <Home />
        <Intro />
        <AboutMe />
        <Projects />
        <Experience />
        <Stack />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
