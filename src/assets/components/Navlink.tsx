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
    className={`tracking-wider uppercase text-base text-gray-500 dark:text-gray-200 hover:text-special-500 transition-all hover:tracking-widest`}
    onClick={()=>props.setMenuToggled(false)}>
        {props.pageName}
    </AnchorLink>
  )
}

export default Navlink