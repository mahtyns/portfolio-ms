type Props = {
    projectDescription: string
}

const ProjectDescription = (props: Props) => {
  return (
    <div className="font-lato text-gray-500 tracking-wide py-2 w-5/6 font-light text-lg">
        {props.projectDescription}
    </div>
  )
}

export default ProjectDescription