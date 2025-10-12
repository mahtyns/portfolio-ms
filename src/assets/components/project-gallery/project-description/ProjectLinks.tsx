import { Project } from "../../../types/projects"
import Button from "../../basics/Button"

type ProjectLinkProps = {
  project: Project
}

const ProjectLinks = (props: ProjectLinkProps) => {

  const liveLink = props.project.link_live;
  const githubLink = props.project.link_github

  return (
    <div className="projects__description__links">
      {liveLink && (
        <Button buttonContent="Live" buttonVariant={true} handleOnClick={() => window.open(liveLink)} />
      )}
      {
        githubLink && (
          <Button buttonContent="Code" buttonVariant={false} handleOnClick={() => window.open(githubLink)} />
        )
      }
    </div>
  )
}

export default ProjectLinks