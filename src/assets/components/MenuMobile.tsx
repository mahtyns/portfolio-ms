import Button from "./basics/Button";
import Navlink from "./basics/Navlink"

type Props = {
  isMenuToggled: boolean;
  setMenuToggled: (toggle: boolean) => void
}

const MenuMobile = (props: Props) => {
  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile__container">
        <div className="navbar-mobile__links">
          <Navlink pageName="Home" clickedPage="home" setMenuToggled={props.setMenuToggled} isAnchor={true} />
          <Navlink pageName="About" clickedPage="about" setMenuToggled={props.setMenuToggled} isAnchor={true} />
          <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={props.setMenuToggled} isAnchor={true} />
          <Navlink pageName="Experience" clickedPage="experience" setMenuToggled={props.setMenuToggled} isAnchor={true} />
          <Navlink pageName="Resume" setMenuToggled={props.setMenuToggled} isAnchor={false} linkURL="/doc/martynasmolarek2025.pdf" />
          <Button
            buttonContent={"Contact Me"}
            buttonVariant={false}
            handleOnClick={() =>
              window.location.href =
              "mailto:martyna.smolarek19@gmail.com?subject=Portfolio Contact&body=Hi Martyna,"
            }
          />
          <button className="navbar-mobile__close" onClick={() => props.setMenuToggled(false)}>Close menu</button>
        </div>
      </div>
    </nav>
  )
}

export default MenuMobile