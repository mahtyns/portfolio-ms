import { useState } from "react"
import { SectionTitle } from "../assets/components/basics/SectionTitle"
import ExperienceItem from "../assets/components/experience-list/ExperienceItem"
import experience from "../assets/datafiles/experience/experience.json"

type Category = 'work' | 'education' | 'other'


const Experience = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('work');

    const work = experience.experiences_list.work;
    const education = experience.experiences_list.education;
    const other = experience.experiences_list.other;

    return (
        <section className="experience  section-main section--black" id="experience">
            <div className="experience__container">
                <div className="experience__content">
                    <SectionTitle sectionTitle="My Experience." sectionVariant={false} />
                    <p className="experience__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="experience__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </p>
                    <a className="experience__cta" href="/doc/martynasmolarek2025.pdf" target="_blank">Open full resume</a>
                </div>
                <div className="experience__items">
                    <div className="experience__items__menu">
                        <ul className="experience__categories">
                            <li className="experience__category" onClick={() => setSelectedCategory('work')}>Work experience</li>
                            <li className="experience__category" onClick={() => setSelectedCategory('education')} >Education</li>
                            <li className="experience__category" onClick={() => setSelectedCategory('other')} >Others</li>
                        </ul>
                    </div>
                    <div className="experience__items__list">
                        {
                            selectedCategory === 'work' &&
                            work.map(experience => <ExperienceItem key={experience.name} experience={experience} />)
                        }
                        {
                            selectedCategory === 'education' &&
                            education.map(experience => <ExperienceItem key={experience.name} experience={experience} />)
                        }
                        {
                            selectedCategory === 'other' &&
                            other.map(experience => <ExperienceItem key={experience.name} experience={experience} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience