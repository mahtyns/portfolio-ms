import Navbar from "./assets/components/Navbar"
import About from "./assets/sections/About"
import Contact from "./assets/sections/Contact"
import Experience from "./assets/sections/Experience"
import Home from "./assets/sections/Home"
import Projects from "./assets/sections/Projects"
import Technology from "./assets/sections/Technology"
import Footer from "./assets/sections/Footer"

function App() {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Projects />
        <About />
        <Technology />
        <Experience />
        <Contact />
        <Footer />
        <div>
        </div>
      </main>
    </>
  )
}

export default App
