import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    pageName: string
    clickedPage: string
    currentPage?: string
    setMenuToggled: (value: boolean) => void
}

export const Navlink = (props: Props) => {

    const isActive = props.currentPage === props.clickedPage;

    return (
        <AnchorLink
            href={`#${props.clickedPage}`}
            className={`navlink`}
            aria-label={`Go to ${props.pageName} section`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => props.setMenuToggled(false)}>
            {props.pageName}
        </AnchorLink>
    )
}

export default Navlink