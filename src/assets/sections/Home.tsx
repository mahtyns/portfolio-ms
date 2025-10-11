import MainOrbits from "../components/MainOrbits"
import Button from "../components/basics/Button"
import MainOrbitsMobile from "../components/MainOrbitsMobile"
import useMediaQueries from "../hooks/useMediaQueries"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Home = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="home" >
            <div className="flex items-center flex-col justify-between mb-12">
                {isAboveMediumScreen ? <MainOrbits /> : <MainOrbitsMobile />}
                <h1 className="mb-6 text-2xl font-playfair text-center">Hello, I'm Martyna. This is my portfolio site.</h1>
                <h2 className="mb-6 md:text-lg font-lato uppercase tracking-wider text-base text-center px-4">FrontEnd Developer | React, Svelte, Astro, NextJS | Discover my projects.</h2>
                <div className="flex gap-6">
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