import { SectionTitle } from "../assets/components/basics/SectionTitle"
import ExperienceItem from "../assets/components/experience-list/ExperienceItem"

const Experience = () => {
    return (
        <section className="experience  section-main section--black" id="experience">
            <div className="experience__container">
                <div className="experience__content">
                    <SectionTitle sectionTitle="My Experience." sectionVariant={false} />
                    <p className="experience__description">About my experience</p>
                    <ul className="experience__categories">
                        <li>Work experience</li>
                        <li>Education</li>
                        <li>Others</li>
                    </ul>
                    {/* <div className="invert dark:invert-0">
                    <Button buttonVariant={false} buttonContent="Resume" handleOnClick={() => window.open('https://drive.google.com/file/d/1CTbO3_29Qt3iKLAJXI5m7CBFaqr2R-Jt/view?usp=sharing')}/>
                </div> */}
                </div>
                <div className="experience__items">
                    <ExperienceItem />
                </div>
            </div>
        </section>
    )
}

export default Experience