import Button from '../assets/components/basics/Button'
import home from '../assets/datafiles/home/home.json'

const Home = () => {
    return (
        <section id='home' className='home section--white'>
            <div className='home__wrapper container'>
                <div className='home__intro'>
                    {home.intro_title}
                </div>
                <div className='home__title'>
                    {home.text_title}
                </div>
                <div className='home__buttons'>
                    <Button buttonContent={home.contact_button} buttonVariant={true} handleOnClick={() => null} />
                    <Button buttonContent={home.about_button} buttonVariant={false} handleOnClick={() => null} />
                </div>
            </div>
        </section>
    )
}


export default Home