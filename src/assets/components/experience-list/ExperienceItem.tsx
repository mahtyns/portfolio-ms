import ExperienceDate from "./experience-description/ExperienceDate";
import ExperienceDescription from "./experience-description/ExperienceDescription";
import ExperienceDetail from "./experience-description/ExperienceDetail";
import ExperienceName from "./experience-description/ExperienceName";

const ExperienceItem = () => {
    const isOpen = true;

    return (
        <div className='experience__item'>
            <ExperienceName expName="Experience" />
            {
                isOpen && <>
                    <ExperienceDate expDate="oct 2026" />
                    <ExperienceDescription expDescr="Blblabha" />
                    <ExperienceDetail expDetails={['A', 'B']} />
                </>

            }
        </div>
    )
}

export default ExperienceItem