import type { ProjectGalleryItems } from "../../types/projects"
import PaginationCircle from "../basics/PaginationCircle";

interface PaginationProps {
    projects: ProjectGalleryItems;
}

export const ProjectGalleryItemPagination = ({ projects }: PaginationProps) => {
    return (
        <div className="projects__pagination-container">
            <div className="projects__pagination__text">Prev</div>
            <div className="projects__pagination__bullets">{projects.map(item => <PaginationCircle key={item.name} isActive={false} />)}</div>
            <div className="projects__pagination__text">Next</div>
        </div>
    )
}
