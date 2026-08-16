import { SectionTitle } from "../assets/components/basics/SectionTitle"
import ExperienceCard from "../assets/components/experience/ExperienceCard"
import experience from '../assets/datafiles/experience/experience.json'

export const Experience = () => {
    return (
        <section id="experience" className="experience section-main section--black">
            <div className="experience__wrapper container">
                <SectionTitle textAlign="left" sectionTitle="Experiences" sectionVariant={false} />
                <div className="experience__cards">
                    {experience && experience.experience_list.map(item => <ExperienceCard key={item.name} {...item} />)}
                </div>
            </div>
        </section>
    )
}
