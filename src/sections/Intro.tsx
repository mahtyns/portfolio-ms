import IntroCard from '../assets/components/intro/IntroCard'
import intro from '../assets/datafiles/intro/intro.json'

const Intro = () => {
    return (
        <section id='intro' className='intro section-main section--white'>
            <div className='intro__wrapper container'>
                <div className='intro__content-text'>
                    <h1 className='title-h1'>
                        {intro.h1_title}
                    </h1>
                    <p className='intro__description'>
                        {intro.subtitle}
                    </p>
                </div>
                <div className='intro__content-cards'>
                    {intro.items_2.map(item => <IntroCard />)}
                </div>
            </div>
        </section>
    )
}


export default Intro