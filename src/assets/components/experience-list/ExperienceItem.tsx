import ExperienceDate from "./experience-description/ExperienceDate";
import ExperienceDescription from "./experience-description/ExperienceDescription";
import ExperienceDetail from "./experience-description/ExperienceDetail";
import ExperienceName from "./experience-description/ExperienceName";
import { Experience } from "../../types/experiences";

interface ExperienceItemProps {
    experience: Experience
}

const ExperienceItem = (props: ExperienceItemProps) => {
    const isOpen = true;

    return (
        <div className='experience__item'>
            <ExperienceName expName={props.experience.name} />
            {
                isOpen && <>
                    <ExperienceDate expDate={props.experience.company + ' / ' + props.experience.date} />
                    <ExperienceDescription expDescr={props.experience.description} />
                    {
                        props.experience.details && <ExperienceDetail expDetails={props.experience.details} />
                    }
                </>

            }
        </div>
    )
}

export default ExperienceItem