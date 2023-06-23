import MainOrbits from "../components/MainOrbits"
import Button from "../components/Button"
import MainOrbitsMobile from "../components/MainOrbitsMobile"
import useMediaQueries from "../hooks/useMediaQueries"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Home = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="home" >
            <div className="flex items-center flex-col justify-between mb-36">
                {isAboveMediumScreen ? <MainOrbits /> : <MainOrbitsMobile />}                
                <p className="mb-6 text-2xl font-playfair ">Hello, I'm Martyna.</p>
                <p className="mb-6 md:text-lg font-lato uppercase tracking-wider text-base text-center">Junior FrontEnd Developer - Discover my projects.</p>
                <div className="flex gap-6">
                    <AnchorLink href="#projects">
                    <Button buttonVariant={true} buttonContent={'Explore'}/>
                    </AnchorLink>
                    <a href="mailto:m.smolarek19@gmail.com">
                    <Button buttonVariant={false} buttonContent={'Contact'}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home