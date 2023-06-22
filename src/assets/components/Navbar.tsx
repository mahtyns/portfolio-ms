// import React from 'react'
// import PropTypes from 'prop-types'

import Navlink from "./Navlink"

const flex = `flex items-center justify-between`

export const Navbar = () => {
  return (
    <nav>
        <div className={`${flex} py-4 px-9`}>
            <div>
                <h1 className={`font-playfair text-xl`}>Martyna Smolarek</h1>
            </div>
              <div className={`${flex} w-[30%]`}>
                  <Navlink pageName="Home" />
                  <Navlink pageName="Projects" />
                  <Navlink pageName="About" />
                  <Navlink pageName="Technology" />
                  <Navlink pageName="Experience" />
                  <Navlink pageName="Contact" />
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar