import MainOrbits from "../components/MainOrbits"
import Button from "../components/Button"

const Home = () => {
    return (
        <section >
            <div className="flex items-center flex-col justify-between mb-36">
                <MainOrbits/>
                <p className="mb-6 text-2xl font-playfair ">Hello, I'm Martyna.</p>
                <p className="mb-6 text-md font-lato uppercase tracking-wider">Junior FrontEnd Developer - Discover my projects.</p>
                <div className="flex gap-6">
                    <Button buttonVariant={true} buttonContent={'Explore'}/>
                    <Button buttonVariant={false} buttonContent={'Contact'}/>
                </div>
            </div>
        </section>
    )
}

export default Home