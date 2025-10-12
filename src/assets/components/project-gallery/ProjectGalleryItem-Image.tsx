import type { ProjectGalleryItems } from "../../types/projects"

export const ProjectGalleryItemImage = (props: ProjectGalleryItems) => {
    return (
        <div className="projects__image__container">
            <div className="projects__image__visual">
                <picture>
                    <img src="https://i.ibb.co/LRNcRsb/daniel.jpg" alt="Image Alt" />
                </picture>
            </div>
        </div>
    )
}
