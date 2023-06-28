import Button from "../Button"
import { Project } from "../../types/projects"

type Props = {
  projects: Array<Project>,
  projectIndShown: number
}

const ProjectLinks = (props: Props) => {
  return (
    <div className="w-fit flex flex-row justify-between items-center gap-4 py-8">
        <Button buttonVariant={false} buttonContent="Link Live" handleOnClick={() => window.open(props.projects[props.projectIndShown].project_link_l)}/>
        <Button buttonVariant={false} buttonContent="Link Github" handleOnClick={() => window.open(props.projects[props.projectIndShown].project_link_gh)}/>
    </div>
  )
}

export default ProjectLinks