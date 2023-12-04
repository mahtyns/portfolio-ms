import { projects } from "../datafiles/data"
import { SectionTitle } from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"


const ProjectsGallery = () => {
  return (
      <section id="projects" className="p-16 xl:p-24">
        <SectionTitle sectionTitle="My work." sectionVariant={true}/>
        <div id="project-cards" className="flex flex-row flex-wrap gap-10 my-10">
            {/* {
                projects.map((proj, ind) => <ProjectCard projects={projects} projectIndShown={ind} />)
            } */}
        </div>
    </section>
  )
}

export default ProjectsGallery