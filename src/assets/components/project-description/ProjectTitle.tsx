
type Props = {
    projectTitle: string
} 

const ProjectTitle = (props: Props) => {
  return (
    <div className="text-5xl tracking-wide text-main-dark font-playfair">
        {props.projectTitle}
    </div>
  )
}

export default ProjectTitle