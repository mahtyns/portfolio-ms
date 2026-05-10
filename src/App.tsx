import Navbar from "./assets/components/Navbar"
import AboutMe from "./sections/AboutMe"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Intro from "./sections/Intro"
import Projects from "./sections/Projects"


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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
