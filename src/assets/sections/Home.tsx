import MainOrbits from "../components/MainOrbits"
import Button from "../components/Button"
import MainOrbitsMobile from "../components/MainOrbitsMobile"
import useMediaQueries from "../hooks/useMediaQueries"

const Home = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section >
            <div className="flex items-center flex-col justify-between mb-36">
                {isAboveMediumScreen ? <MainOrbits /> : <MainOrbitsMobile />}                
                <p className="mb-6 text-2xl font-playfair ">Hello, I'm Martyna.</p>
                <p className="mb-6 md:text-lg font-lato uppercase tracking-wider text-base text-center">Junior FrontEnd Developer - Discover my projects.</p>
                <div className="flex gap-6">
                    <Button buttonVariant={true} buttonContent={'Explore'}/>
                    <Button buttonVariant={false} buttonContent={'Contact'}/>
                </div>
            </div>
        </section>
    )
}

export default Home