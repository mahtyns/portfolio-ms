import { Experience } from "../../types/experiences"

const ExperienceCard = (experience: Experience) => {
    return (
        <div className="experience__card">
            <div className="experience__card__count">
            </div>
            <div className="experience__card__content">
                <div className="experience__card__topbar">
                    <div className="experience__card__name">
                        {experience.name}
                    </div>
                </div>
                <div className="experience__card__description">
                    {experience.description}
                </div>
                <div className="experience__card__details">
                    {experience.details?.map(detail => <span key={detail}>{detail}</span>)}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard