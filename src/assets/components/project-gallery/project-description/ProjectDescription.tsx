type Props = {
  projectDescription: string
}

const ProjectDescription = (props: Props) => {
  return (
    <div className="projects__description__text dark:text-gray-300">
      {props.projectDescription}
    </div>
  )
}

export default ProjectDescription