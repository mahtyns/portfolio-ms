import { Project } from "../../../types/projects"
import Button from "../../basics/Button"
import { useState } from "react"

export const DesignCard = (project: Project) => {
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
                        project.work_project && <span className="projects__card__work">
                            Work project
                        </span>
                    }

                    <p className="projects__card__dates">
                        {project.date}
                    </p>
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
                </div>
            </div>
        </div>
    )
}


