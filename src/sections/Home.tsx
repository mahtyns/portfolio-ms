import MainOrbits from "../assets/components/MainOrbits"
import Button from "../assets/components/basics/Button"
import MainOrbitsMobile from "../assets/components/MainOrbitsMobile"
import useMediaQueries from "../assets/hooks/useMediaQueries"
import AnchorLink from "react-anchor-link-smooth-scroll"
import home from '../assets/datafiles/home/home.json'

const Home = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="home" className="home" >
            <div className="home__container">
                {isAboveMediumScreen ? <MainOrbits /> : <MainOrbitsMobile />}
                <h1 className="home__title">{home.h1_title}</h1>
                <h2 className="home__subtitle">FrontEnd Developer | React, Svelte, Astro, NextJS | Discover my projects.</h2>
                <div className="home__ctas flex gap-6">
                    <AnchorLink href="#projects">
                        <Button buttonVariant={true} buttonContent={'Explore'} handleOnClick={() => null} />
                    </AnchorLink>
                    <Button buttonVariant={false} buttonContent={'Contact'} handleOnClick={() => window.open('mailto:martyna.smolarek19@gmail.com')} />
                </div>
            </div>
        </section>
    )
}

export default Home