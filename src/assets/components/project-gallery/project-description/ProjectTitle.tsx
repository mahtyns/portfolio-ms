
type Props = {
    projectTitle: string
} 

const ProjectTitle = (props: Props) => {
  return (
    <div className="xl:text-5xl text-4xl xl:w-5/6 tracking-wide text-main-dark font-playfair pb-2 md:pb-4 border-b dark:border-gray-500 dark:text-main-white">
        {props.projectTitle}
    </div>
  )
}

export default ProjectTitle