import type { Project } from "../../types/projects"

interface ProjectImageProps {
    project: Project
}

export const ProjectGalleryItemImage = (props: ProjectImageProps) => {
    return (
        <div className="projects__image__container">
            <div className="projects__image__visual">
                <picture>
                    <img src={props.project.image.image_src} alt={props.project.image.image_alt} />
                </picture>
            </div>
        </div>
    )
}
