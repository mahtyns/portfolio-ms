
type Props = {
  projectDate: string
}

const ProjectDate = (props: Props) => {
  return (
    <div className="projects__description__dates dark:text-gray-300">
      {props.projectDate}
    </div>
  )
}

export default ProjectDate