
type Props = {
    projectDate: string
}

const ProjectDate = (props: Props) => {
  return (
    <div className="text-gray-500 uppercase text-l tracking-wider font-lato py-4">
        {props.projectDate}
    </div>
  )
}

export default ProjectDate