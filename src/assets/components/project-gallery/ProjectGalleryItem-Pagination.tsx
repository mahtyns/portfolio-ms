import type { ProjectGalleryItems } from "../../types/projects"
import PaginationCircle from "../basics/PaginationCircle";

interface PaginationProps {
    projects: ProjectGalleryItems;
    index: number,
    setNext: () => void,
    setPrev: () => void
}

export const ProjectGalleryItemPagination = (props: PaginationProps) => {
    return (
        <div className="projects__pagination-container">
            <button onClick={props.setPrev} className="projects__pagination__text">Prev</button>
            <div className="projects__pagination__bullets">{props.projects.map((item, ind) => <PaginationCircle key={item.name} isActive={ind === props.index ? true : false} />)}</div>
            <button onClick={props.setNext} className="projects__pagination__text">Next</button>
        </div>
    )
}
