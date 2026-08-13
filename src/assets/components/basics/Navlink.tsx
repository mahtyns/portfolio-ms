import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrambleText from '../../components/basics/ScrambleText';

type Props = {
    pageName: string
    clickedPage?: string
    currentPage?: string
    setMenuToggled: (value: boolean) => void
    isAnchor: boolean
    linkURL?: string
}

export const Navlink = (props: Props) => {

    const isActive = props.currentPage === props.clickedPage

    return props.isAnchor ? (
        <AnchorLink
            href={`#${props.clickedPage}`}
            className="navlink"
            aria-label={`Go to ${props.pageName} section`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => props.setMenuToggled(false)}
        >
            <ScrambleText>
                {props.pageName}
            </ScrambleText>
        </AnchorLink>
    ) : (
        <a
            href={props.linkURL}
            className="navlink"
            aria-label={`Go to ${props.pageName}`}
            onClick={() => props.setMenuToggled(false)}
            target='_blank'
        >
            {props.pageName}
        </a>
    )
}

export default Navlink