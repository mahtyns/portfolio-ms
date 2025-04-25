import Button from "../Button"
import { Project } from "../../types/projects"

type Props = {
  projects: Array<Project>,
  projectIndShown: number
}

const ProjectLinks = (props: Props) => {

  const liveLink = props.projects[props.projectIndShown].project_link_l
  const githubLink = props.projects[props.projectIndShown].project_link_gh
  return (
    <div className="w-fit flex flex-row justify-between items-center gap-4 py-8">
      {
        liveLink && (
          <Button buttonVariant={false} buttonContent="Link Live" handleOnClick={() => window.open(liveLink)} />
        )
      }
      {
        githubLink && (
          <Button buttonVariant={false} buttonContent="Link Github" handleOnClick={() => window.open(githubLink)}/>
        )
      }
    </div>
  )
}

export default ProjectLinks