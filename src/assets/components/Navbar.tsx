// import PropTypes from 'prop-types'
import { useState } from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import Navlink from "./basics/Navlink"
import MenuMobile from "./MenuMobile";
import Button from "./basics/Button";


const Navbar = () => {
    const [isMenuToggled, setMenuToggled] = useState(false)
    const isAboveMediumScreen = useMediaQueries("(min-width: 1024px)");

    return (
        <nav className="navbar section--white" >
            <div
                className={`navbar__wrapper`}>
                <div className="navbar__logo">
                    <span className={`navbar__logo__text`}>Martyna Smolarek</span>
                </div>
                {isAboveMediumScreen
                    ? <div className="navbar__menu">
                        <Navlink pageName="Home" clickedPage="home" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="About" clickedPage="about" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={setMenuToggled} />
                        <Navlink pageName="Contact" clickedPage="contact" setMenuToggled={setMenuToggled} />
                        <Button buttonContent={"Resume"} buttonVariant={false} handleOnClick={() => window.open("/doc/martynasmolarek2025.pdf", "_blank")} />
                    </div>
                    :
                    <div className="navbar__menu navbar__menu--mobile">
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

export default Navbar