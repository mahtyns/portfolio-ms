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
          <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="close button" className="w-4 h-4 invert"/>
        </div>
        <div className="flex gap-8 flex-col py-10 invert">
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

export default MenuMobile