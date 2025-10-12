import projects from '../datafiles/projects/projects.json'
import type { ProjectGalleryItems } from '../types/projects'
import { ProjectGalleryItemDescription } from './project-gallery/ProjectGalleryItem-Description'
import { ProjectGalleryItemImage } from './project-gallery/ProjectGalleryItem-Image'
import { ProjectGalleryItemPagination } from './project-gallery/ProjectGalleryItem-Pagination'

export const ProjectGallery = () => {
    const projectList: ProjectGalleryItems = projects.project_list;
    return (
        <>
            <div className='projects__container'>
                <ProjectGalleryItemImage {...projectList} />
                <ProjectGalleryItemDescription {...projectList} />
            </div>
            <ProjectGalleryItemPagination projects={projectList} />
        </>
    )
}
