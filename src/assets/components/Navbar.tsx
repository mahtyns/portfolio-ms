// import PropTypes from 'prop-types'

import useMediaQueries from "../hooks/useMediaQueries";
import Navlink from "./Navlink"

const flex = `flex items-center justify-between`

const Navbar = () => {

    const isAboveMediumScreen = useMediaQueries("(min-width: 1024px)");

    return (
        <nav>
            <div
                className={`${flex} py-6 px-9 border-b border-gray-100 fixed top-0 bg-main-white z-50 w-full`}>
                <div>
                    <h1 className={`font-playfair md:text-xl text-lg`}>Martyna Smolarek</h1>
                </div>
                {isAboveMediumScreen
                    ? <div className={`${flex} gap-4`}>
                            <Navlink pageName="Home"/>
                            <Navlink pageName="Projects"/>
                            <Navlink pageName="About"/>
                            <Navlink pageName="Technology"/>
                            <Navlink pageName="Experience"/>
                            <Navlink pageName="Contact"/>
                        </div>
                    : <div>
                      X
                      </div>}
            </div>
        </nav>
    )
}

Navbar.propTypes = {}

export default Navbar