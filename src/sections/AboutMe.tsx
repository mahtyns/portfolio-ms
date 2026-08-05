import { SectionTitle } from "../assets/components/basics/SectionTitle"

const AboutMe = () => {
    return (
        <section id="about" className="about section-main section--gray-dark">
            <div className="about__wrapper container">
                <div className="about__content">
                    <SectionTitle sectionTitle="About me." sectionVariant={false} textAlign="left" />
                    <div className="about__description">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
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