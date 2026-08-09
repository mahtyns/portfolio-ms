import { SectionTitle } from "../assets/components/basics/SectionTitle"
import about from '../assets/datafiles/about/about.json'

const AboutMe = () => {
    return (
        <section id="about" className="about section-main section--gray-dark">
            <div className="about__wrapper container">
                <div className="about__content">
                    <SectionTitle sectionTitle={about.intro} sectionVariant={false} textAlign="left" />
                    <div className="about__description">
                        <p>{about.main_text}</p>
                    </div>
                    <div className="about__description-extra">
                        <p>{about.extra_text}</p>
                    </div>
                    <div className="about__languages">
                        <span className="about__languages__title">{about.languages_text}</span>
                        {about.languages.map(lang => <p>{lang}</p>)}
                    </div>
                </div>
                <div>
                    <picture>
                        <img src="" className="about__image" />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default AboutMe