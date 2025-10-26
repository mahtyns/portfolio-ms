import Navlink from "./basics/Navlink"

type Props = {
  isMenuToggled: boolean;
  setMenuToggled: (toggle: boolean) => void
}

const MenuMobile = (props: Props) => {
  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile__container dark:bg-gray-200">
        <div className="navbar-mobile__links">
          <Navlink pageName="Home" clickedPage="home" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="About" clickedPage="about" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Technology" clickedPage="technology" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Experience" clickedPage="experience" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Contact" clickedPage="contact" setMenuToggled={props.setMenuToggled} />
          <button className="navbar-mobile__close" onClick={() => props.setMenuToggled(false)}>Close menu</button>
        </div>
      </div>
    </nav>
  )
}

export default MenuMobile