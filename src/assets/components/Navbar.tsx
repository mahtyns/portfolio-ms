// import PropTypes from 'prop-types'
import { useState } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import Navlink from "./basics/Navlink"
import MenuMobile from "./MenuMobile";

type Props = {
    darkMode: boolean,
    handleDarkMode: () => void
}

const Navbar = (props: Props) => {
    const [isMenuToggled, setMenuToggled] = useState(false)
    const isAboveMediumScreen = useMediaQueries("(min-width: 1024px)");

    return (
        <nav className="navbar dark:bg-main-dark dark:border-gray-800 " >
            <div
                className={`navbar__wrapper`}>
                <div className="navbar__logo">
                    <span className={`font-playfair md:text-xl text-lg dark:text-gray-200`}>Martyna Smolarek</span>
                </div>
                {isAboveMediumScreen
                    ? <div className="navbar__menu">
                        <Navlink pageName="Home" clickedPage="home" setMenuToggled={setMenuToggled} />
                        {/* <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={setMenuToggled} /> */}
                        <Navlink pageName="About" clickedPage="about" setMenuToggled={setMenuToggled} />
                        {/* <Navlink pageName="Technology" clickedPage="technology" setMenuToggled={setMenuToggled} /> */}
                        {/* <Navlink pageName="Experience" clickedPage="experience" setMenuToggled={setMenuToggled} /> */}
                        <Navlink pageName="Contact" clickedPage="contact" setMenuToggled={setMenuToggled} />
                        {props.darkMode ?
                            <img src="https://cdn-icons-png.flaticon.com/512/11598/11598733.png" alt="dark mode" className="navbar__menu__theme-icon invert" onClick={() => props.handleDarkMode()} /> : <img src="https://cdn-icons-png.flaticon.com/512/1415/1415431.png" alt="dark mode" className="navbar__menu__theme-icon" onClick={() => props.handleDarkMode()} />}
                    </div>
                    :
                    <div className="navbar__menu navbar__menu--mobile">
                        {props.darkMode ?
                            <img src="https://cdn-icons-png.flaticon.com/512/11598/11598733.png" alt="dark mode" className=" invert navbar__menu__theme-icon" onClick={() => props.handleDarkMode()} /> : <img src="https://cdn-icons-png.flaticon.com/512/1415/1415431.png" alt="dark mode" className="navbar__menu__theme-icon" onClick={() => props.handleDarkMode()} />}
                        <div className="navbar__menu__burger-icon" onClick={() => setMenuToggled(!isMenuToggled)}>
                            <img src="https://cdn-icons-png.flaticon.com/512/7073/7073780.png" alt="burger-menu" />
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