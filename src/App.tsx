import Navbar from "./assets/components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Technology from "./sections/Technology"
import Footer from "./sections/Footer"
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
        <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode}/>
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
