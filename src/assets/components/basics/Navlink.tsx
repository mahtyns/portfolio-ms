import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    pageName: string
    clickedPage: string
    setMenuToggled: (value: boolean)=>void
}

export const Navlink = (props: Props) => {
  
    return (
    <AnchorLink 
    href={`#${props.clickedPage}`} 
    className={`navlink dark:text-gray-200`}
    onClick={()=>props.setMenuToggled(false)}>
        {props.pageName}
    </AnchorLink>
  )
}

export default Navlink