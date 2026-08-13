import { useState, useEffect } from "react";
import Button from "../assets/components/basics/Button"
import { SectionTitle } from "../assets/components/basics/SectionTitle"
import { DesignCard } from "../assets/components/projects/design/DesignCard"
import { project_list } from '../assets/datafiles/projects/projects.json'
import { project_details } from '../assets/datafiles/projects/projects-detailed.json'
import { Modal } from "../assets/components/projects/modal/Modal";


const Projects = () => {
    const [projectModal, setProjectModal] = useState<string | null>(null)

    const selectedProject = project_details.find(project => project.slug === projectModal)

    useEffect(() => {
        document.body.style.overflow = selectedProject ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [selectedProject])

    return (
        <section id="projects" className="projects section-main section--black">
            <div className="projects__wrapper projects--code container">
                <div className="projects__text">
                    <SectionTitle sectionTitle="My projects" sectionVariant={false} textAlign="left" />
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                </div>
            </div>
            <div className="projects__wrapper container projects--design">
                {
                    project_list.map(project => <DesignCard key={project.slug} {...project} setProjectModal={setProjectModal} />)
                }
                <Button buttonVariant={false} buttonContent="See more on Github" handleOnClick={() => window.open('https://github.com/mahtyns/')} />
            </div>
            {
                projectModal && selectedProject && <Modal project={selectedProject} />
            }
        </section>
    )
}

export default Projects