import Button from '../assets/components/basics/Button'
import home from '../assets/datafiles/home/home.json'
import HeroInteractive from '../assets/components/basics/HomeInteractive'


const Home = () => {
    return (
        <section id='home' className='home section--black'>
            <div className='home__grid' aria-hidden='true' />
            <div className='home__scanline' aria-hidden='true' />
            <HeroInteractive />
            <div className='home__wrapper container'>
                <div className='home__intro'>
                    <span className='home__intro-cursor'>&gt;</span> {home.intro_title}
                </div>
                <h1 className='home__title title-h1'>
                    {home.text_title}
                </h1>
                <h2 className='home__subtitle'>
                    {home.text_subtitle}
                </h2>
                <div className='home__description'>
                    {home.text_description}
                </div>
                <div className='home__buttons'>
                    <Button buttonContent={home.about_button} buttonVariant={true} handleOnClick={() => window.location.href = '#projects'} />
                    <Button buttonContent={home.contact_button} buttonVariant={false} handleOnClick={() => window.location.href = '#contact'} />
                </div>
            </div>
        </section>
    )
}



export default Home