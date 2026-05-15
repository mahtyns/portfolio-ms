import { SectionTitle } from "../assets/components/basics/SectionTitle"

const AboutMe = () => {
    return (
        <section id="about" className="about section-main section--black">
            <div className="about__wrapper container">
                <SectionTitle sectionTitle="About me." sectionVariant={false} />
            </div>
        </section>
    )
}

export default AboutMe