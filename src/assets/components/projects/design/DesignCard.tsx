import { Project } from "../../../types/projects"
import Button from "../../basics/Button"
import { useState, Dispatch, SetStateAction } from "react"

type DesignCardProps = Project & {
    setProjectModal: Dispatch<SetStateAction<string | null>>
}

export const DesignCard = ({
    setProjectModal,
    ...project
}: DesignCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`projects__card ${open ? 'is-open' : ''} `}
            onClick={() => setOpen(!open)}
        >
            <div className="projects__card__count">
            </div>

            <div className="projects__card__content">
                <div className="projects__card__topbar">
                    <h3 className="projects__card__title">
                        {project.name}
                    </h3>

                    {
                        project.work_project ? <span className="projects__card__work">
                            Work project
                        </span> : <span className="projects__card__personal">
                            Personal project
                        </span>
                    }

                    <p className="projects__card__dates">
                        {project.date}
                    </p>
                    <picture aria-label="Show more" className={open ? `arrow-down arrow-down--open` : `arrow-down`}>
                        <img src="/images/ui/arrow_down.png" alt="Show more - arrow down" />
                    </picture>
                </div>

                <div className="projects__card__image-wrapper">
                    <picture>
                        <img
                            className="projects__card__image"
                            src={project.image.image_src}
                            alt={project.image.image_alt}
                        />
                    </picture>

                    <div className="projects__card__scanline" />
                </div>

                <div className="projects__card__description">
                    {project.description}
                </div>

                <div className="projects__card__stack">
                    {
                        project.stack.map(item => <span key={item}>{item}</span>)
                    }
                </div>

                <div className="projects__card__buttons">
                    {
                        project.link_live &&
                        <Button
                            buttonContent="Live"
                            buttonVariant={false}
                            handleOnClick={() => window.open(project.link_live)}
                        />
                    }

                    {
                        project.link_github &&
                        <Button
                            buttonContent="Code"
                            buttonVariant={false}
                            handleOnClick={() => window.open(project.link_github)}
                        />
                    }

                    {/* <Button
                        buttonContent="See more"
                        buttonVariant={false}
                        handleOnClick={() => setProjectModal(project.slug)}
                    /> */}
                </div>
            </div>
        </div>
    )
}


