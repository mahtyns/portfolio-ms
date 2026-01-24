import { SectionTitle } from "../assets/components/basics/SectionTitle"
import ExperienceItem from "../assets/components/experience-list/ExperienceItem"
import experience from "../assets/datafiles/experience/experience.json"



const Experience = () => {
    const work = experience.experiences_list.work;

    return (
        <section className="experience  section-main section--black" id="experience">
            <div className="experience__container">
                <div className="experience__content">
                    <SectionTitle sectionTitle="...and my experience" sectionVariant={false} />
                    <p className="experience__description">Since 2024, I’ve been working at <strong>xFever</strong> in the entertainment sector, designing and developing web experiences for high-profile clients such as Formula 1 Spain GP, Toyota, Magnum, and Warner Bros. My role involves creating and improving modular CMS components, building reusable frontend elements, integrating APIs, and optimising user journeys. This experience has allowed me to grow technically while honing my problem-solving, collaboration, and leadership skills.
                    </p>
                    <p className="experience__description">
                        I’ve also been actively involved in internal hackathons and innovation challenges, experimenting with AI to streamline workflows and improve efficiency. Every day, I aim to create interfaces that are not only visually appealing, but also accessible, maintainable, and performant.
                    </p>
                    <a className="experience__cta" href="/doc/martynasmolarek2025.pdf" target="_blank">Open full resume</a>
                </div>
                <div className="experience__items">
                    <div className="experience__items__list">
                        {work.map(experience => <ExperienceItem key={experience.name} experience={experience} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience