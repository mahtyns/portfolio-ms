import type { Project } from "../../types/projects"
import ProjectDescription from "./project-description/ProjectDescription"
import ProjectLinks from "./project-description/ProjectLinks"
import ProjectTitle from "./project-description/ProjectTitle"
import ProjectDate from "./project-description/ProjectDate"
import ProjectWork from "./project-description/ProjectWork"

interface ProjectDescriptionProps {
    project: Project
}

export const ProjectGalleryItemDescription = (props: ProjectDescriptionProps) => {
    return (
        <div className="projects__description">
            <div className="projects__description__wrapper">
                <div className="projects__description__info">
                    <ProjectDate projectDate={props.project.date} />
                    <ProjectWork projectWork={props.project.work_project} />
                </div>
                <ProjectTitle projectTitle={props.project.name} />
                <ProjectDescription projectDescription={props.project.description} />
                <ProjectLinks project={props.project} />
            </div>
        </div>
    )
}
