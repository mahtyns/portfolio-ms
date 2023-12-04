import { Project } from "../types/projects"

type Props = {
  projects: Array<Project>,
  projectIndShown: number
}


const ProjectCard = (props: Props) => {
  return (
    <article className={`w-96 h-96 border border-gray-500 bg-gray-50 drop-shadow-lg dark:bg-main-dark`}>
      <img src={props.projects[props.projectIndShown].project_img_src} loading="lazy" className="w-full h-56 object-cover"/>
      <div className="text-2xl font-playfair w-full text-center py-3">
        {props.projects[props.projectIndShown].project_name}
      </div>
      <div className="w-full flex gap-x-2 justify-center flex-wrap text-sm uppercase text-gray-400 dark:text-gray-100 px-3">
        {props.projects[props.projectIndShown].project_stack.map( element => <p key={element}>{element}</p>)}
      </div>
    </article>
  )
}

export default ProjectCard