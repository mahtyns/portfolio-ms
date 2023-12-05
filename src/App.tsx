import Navbar from "./assets/components/Navbar"
import About from "./assets/sections/About"
import Contact from "./assets/sections/Contact"
import Experience from "./assets/sections/Experience"
import Home from "./assets/sections/Home"
import Projects from "./assets/sections/Projects"
import Technology from "./assets/sections/Technology"
import Footer from "./assets/sections/Footer"
import { useEffect, useState } from "react"


function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect( 
    () => {
    document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode]
  )

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="dark:bg-main-dark">
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
