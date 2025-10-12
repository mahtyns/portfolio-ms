import projects from '../datafiles/projects/projects.json'
import type { ProjectGalleryItems } from '../types/projects'
import { ProjectGalleryItemDescription } from './project-gallery/ProjectGalleryItem-Description'
import { ProjectGalleryItemImage } from './project-gallery/ProjectGalleryItem-Image'
import { ProjectGalleryItemPagination } from './project-gallery/ProjectGalleryItem-Pagination'
import { useState } from 'react'

export const ProjectGallery = () => {
    const [activeProjectInd, setActiveProjectInd] = useState(0);
    const projectList: ProjectGalleryItems = projects.project_list;

    const handleNextProject = () => {
        if (activeProjectInd === projectList.length - 1) {
            setActiveProjectInd(0)
        }
        else setActiveProjectInd(activeProjectInd + 1)
    }

    const handlePrevProject = () => {
        if (activeProjectInd === 0) {
            setActiveProjectInd(projectList.length - 1)
        }
        else {
            setActiveProjectInd(activeProjectInd - 1)
        }
    }

    return (
        <>
            <div className='projects__container'>
                <ProjectGalleryItemImage project={projectList[activeProjectInd]} />
                <ProjectGalleryItemDescription project={projectList[activeProjectInd]} />
            </div>
            <ProjectGalleryItemPagination projects={projectList} index={activeProjectInd} setNext={handleNextProject} setPrev={handlePrevProject} />
        </>
    )
}
