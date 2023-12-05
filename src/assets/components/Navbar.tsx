// import PropTypes from 'prop-types'
import { useState } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import Navlink from "./Navlink"
import MenuMobile from "./MenuMobile";

const flex = `flex items-center justify-between`

type Props = {
    darkMode: boolean,
    handleDarkMode: () => void
}

const Navbar = (props:Props) => {


    const [isMenuToggled, setMenuToggled] = useState(false)
    const isAboveMediumScreen = useMediaQueries("(min-width: 1024px)");

    return (
        <nav >
            <div
                className={`${flex} py-6 px-9 border-b border-gray-100 fixed top-0 bg-main-white z-20 w-full dark:bg-main-dark dark:border-gray-800`}>
                <div>
                    <h1 className={`font-playfair md:text-xl text-lg dark:text-gray-200`}>Martyna Smolarek</h1>
                </div>
                {isAboveMediumScreen
                    ? <div className={`${flex} gap-4`}>
                        <Navlink pageName="Home" clickedPage="home" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="About" clickedPage="about" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Technology" clickedPage="technology" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Experience" clickedPage="experience" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Contact" clickedPage="contact" setMenuToggled={setMenuToggled} />
                        {props.darkMode ? 
                        <img src="https://cdn-icons-png.flaticon.com/512/11598/11598733.png" alt="dark mode" className="w-7 h-7 cursor-pointer invert" onClick={() => props.handleDarkMode()} /> : <img src="https://cdn-icons-png.flaticon.com/512/1415/1415431.png" alt="dark mode" className="w-6 h-6 cursor-pointer" onClick={()=>props.handleDarkMode()}/>}
                        </div>
                    : 
                    <div className="flex flex-row gap-4">
                    {props.darkMode ?
                            <img src="https://cdn-icons-png.flaticon.com/512/11598/11598733.png" alt="dark mode" className="w-5 h-5 cursor-pointer invert" onClick={() => props.handleDarkMode()} /> : <img src="https://cdn-icons-png.flaticon.com/512/1415/1415431.png" alt="dark mode" className="w-5 h-5 cursor-pointer" onClick={() => props.handleDarkMode()} />}
                    <div onClick={()=>setMenuToggled(!isMenuToggled)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7073/7073780.png" alt="burger-menu" className="w-5 h-5 cursor-pointer dark:invert"/>
                    </div>
                        {
                    isMenuToggled ? <MenuMobile setMenuToggled={setMenuToggled} isMenuToggled={isMenuToggled} /> : null
                        }
                    </div>
                    }
                    
            </div>

        </nav>
    )
}

Navbar.propTypes = {}

export default Navbar