import projects from '../datafiles/projects/projects.json'
import type { ProjectGalleryItems } from '../types/projects'
import Button from './basics/Button'
import { ProjectGalleryItemDescription } from './project-gallery/ProjectGalleryItem-Description'
import { useState } from 'react'

export const ProjectGallery = () => {
    const projectList: ProjectGalleryItems = projects.project_list;
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className='projects__container'>
                {projectList.slice(0, 3).map((project, index) => (
                    <div key={index} className='project__item'>
                        <ProjectGalleryItemDescription project={project} />
                    </div>
                ))}
            </div>
            <Button buttonContent={visible ? "Close" : "See more Projects"} buttonVariant={true} handleOnClick={() => setVisible(!visible)} />
            <div className={`projects__container projects__hidden ${visible ? 'visible' : ''}`}>
                {projectList.slice(3).map((project, index) => (
                    <div key={index} className='project__item'>
                        <ProjectGalleryItemDescription project={project} />
                    </div>
                ))}
            </div>
        </>
    )
}
