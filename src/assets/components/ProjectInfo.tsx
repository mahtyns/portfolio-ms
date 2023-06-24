import ProjectDate from "./project-description/ProjectDate"
import ProjectLinks from "./project-description/ProjectLinks"
import ProjectTitle from "./project-description/ProjectTitle"
import ProjectDescription from "./project-description/ProjectDescription"
import useMediaQueries from "../hooks/useMediaQueries"
import { Project } from "../types/projects"


type Props = {
  projects: Array<Project>,
  projectIndShown: number
}

const ProjectInfo = (props: Props) => {

  const isAboveMediumScreen = useMediaQueries('(min-width: 1240px)')

  return (
    <article className="xl:py-16 pt-10" >
      {isAboveMediumScreen ? null : <img src={props.projects[props.projectIndShown].project_img_src} alt="project" className="w-full h-64 object-cover mb-8 border border-main-dark" />}
        <ProjectTitle projectTitle={props.projects[props.projectIndShown].project_name}/>
      <ProjectDate projectDate={props.projects[props.projectIndShown].project_date} />
      <ProjectDescription projectDescription={props.projects[props.projectIndShown].project_description} />
      <ProjectLinks projects={props.projects} projectIndShown={props.projectIndShown}/>
    </article>
  )
}

export default ProjectInfo