import { ProjectGallery } from "../assets/components/ProjectGallery"
import { SectionTitle } from "../assets/components/basics/SectionTitle"

const Projects = () => {
    return (
        <section id="projects" className={`projects section-main section--white dark:bg-gray-800`}>
            <SectionTitle sectionTitle="Discover my projects." sectionVariant={true} />
            <ProjectGallery />
        </section >
    )
}

export default Projects