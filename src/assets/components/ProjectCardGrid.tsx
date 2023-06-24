import ActiveCircle from "./ActiveCircle"
import ProjectCard from "./ProjectCard"
import { Project } from "../types/projects"
import { projects } from "../datafiles/data"

type Props = {
  projects: Array<Project>,
  projectIndShown: number,
  handleNextProject: () => void,
  handlePrevProject: () => void
}

const ProjectCardGrid = (props: Props) => {
  return (
    <>
    <div className="flex gap-2 xl:gap-12 w-full h-full items-center justify-center xl:basis-1/3 flex-wrap">
        <div onClick={()=>props.handlePrevProject()}>
          <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="prev" className="w-10 h-10 rotate-180" />
        </div>
        <ProjectCard projects={props.projects} projectIndShown={props.projectIndShown} />
        <div onClick={()=>props.handleNextProject()}>
          <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="next" className="w-10 h-10"/>
        </div>
    </div>
    <div className="w-full flex justify-center gap-4">
      {projects.map( (element, index) => 
      <ActiveCircle key={index} isActive={index === props.projectIndShown ? true : false } />)}
    </div>
  </>
  )
}

export default ProjectCardGrid