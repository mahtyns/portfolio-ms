import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    pageName: string
    clickedPage: string
}

export const Navlink = (props: Props) => {
  
    return (
    <AnchorLink href={`#${props.clickedPage}`} className={`tracking-wider uppercase text-base text-gray-500 hover:text-special-500 transition-all hover:tracking-widest`}>
        {props.pageName}
    </AnchorLink>
  )
}

export default Navlink