
type Props = {
    projectTitle: string
} 

const ProjectTitle = (props: Props) => {
  return (
    <div className="text-5xl w-5/6 tracking-wide text-main-dark font-playfair pb-4 border-b">
        {props.projectTitle}
    </div>
  )
}

export default ProjectTitle