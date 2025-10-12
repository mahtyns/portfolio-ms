import type { ProjectGalleryItems } from "../../types/projects"
import ProjectDescription from "./project-description/ProjectDescription"
import ProjectLinks from "./project-description/ProjectLinks"
import ProjectTitle from "./project-description/ProjectTitle"
import ProjectDate from "./project-description/ProjectDate"
import ProjectWork from "./project-description/ProjectWork"

export const ProjectGalleryItemDescription = (props: ProjectGalleryItems) => {
    return (
        <div className="projects__description">
            <div className="projects__description__wrapper">
                <div className="projects__description__info">
                    <ProjectDate projectDate="January 2025" />
                    <ProjectWork projectWork={true} />
                </div>
                <ProjectTitle projectTitle="Project Title" />
                <ProjectDescription projectDescription="Project with FeverUp - Full page redesign to adapt to the new CMS. Started with Figma mockups." />
                <div>
                    <ProjectLinks />
                </div>
            </div>
        </div>
    )
}
