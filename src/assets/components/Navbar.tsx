// import PropTypes from 'prop-types'
import { useState } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import Navlink from "./Navlink"
import MenuMobile from "./MenuMobile";

const flex = `flex items-center justify-between`

const Navbar = () => {

    const [isMenuToggled, setMenuToggled] = useState(false)
    const isAboveMediumScreen = useMediaQueries("(min-width: 1024px)");

    return (
        <nav>
            <div
                className={`${flex} py-6 px-9 border-b border-gray-100 fixed top-0 bg-main-white z-20 w-full`}>
                <div>
                    <h1 className={`font-playfair md:text-xl text-lg`}>Martyna Smolarek</h1>
                </div>
                {isAboveMediumScreen
                    ? <div className={`${flex} gap-4`}>
                            <Navlink pageName="Home" clickedPage="home"/>
                            <Navlink pageName="Projects" clickedPage="projects"/>
                            <Navlink pageName="About" clickedPage="about"/>
                            <Navlink pageName="Technology" clickedPage="technology"/>
                            <Navlink pageName="Experience" clickedPage="experience"/>
                            <Navlink pageName="Contact" clickedPage="contact"/>
                        </div>
                    : <div onClick={()=>setMenuToggled(!isMenuToggled)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7073/7073780.png" alt="burger-menu" className="w-5 h-5"/>
                      </div>}
                    
            </div>
            {
                isMenuToggled ? <MenuMobile setMenuToggled={setMenuToggled} isMenuToggled={isMenuToggled} /> : null
            }
        </nav>
    )
}

Navbar.propTypes = {}

export default Navbar