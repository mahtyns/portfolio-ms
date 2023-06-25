import Navlink from "./Navlink"

type Props = {
  isMenuToggled: boolean;
  setMenuToggled: (toggle: boolean)=> void
}

const MenuMobile = ( props: Props ) => {
  return (
    <nav>
      <div className="bg-main-dark h-screen w-5/6 z-50 absolute top-0 r p-24 right-0">
        <div className="w-5/6 flex justify-end" onClick={()=>props.setMenuToggled(!props.isMenuToggled)}>
          <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="close button" className="w-6 h-6 invert cursor-pointer"/>
        </div>
        <div className="flex gap-8 flex-col py-10 invert">
        <Navlink pageName="Home" clickedPage="home" setMenuToggled={props.setMenuToggled}/>
          <Navlink pageName="Projects" clickedPage="projects" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="About" clickedPage="about" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Technology" clickedPage="technology" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Experience" clickedPage="experience" setMenuToggled={props.setMenuToggled} />
          <Navlink pageName="Contact" clickedPage="contact" setMenuToggled={props.setMenuToggled} />
        </div>
      </div>
    </nav>
  )
}

export default MenuMobile