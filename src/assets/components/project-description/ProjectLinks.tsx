import Button from "../Button"
import { Project } from "../../types/projects"

type Props = {
  projects: Array<Project>,
  projectIndShown: number
}

const ProjectLinks = (props: Props) => {
  return (
    <div className="w-fit flex flex-row justify-between items-center gap-4 py-8">
      <a href={props.projects[props.projectIndShown].project_link_l} target="_blank" >
        <Button buttonVariant={false} buttonContent="Link Live"/>
      </a>
      <a href={props.projects[props.projectIndShown].project_link_gh} target="_blank">
        <Button buttonVariant={false} buttonContent="Link Github"/>
      </a>
    </div>
  )
}

export default ProjectLinks