import Button from "../Button"

const ProjectLinks = () => {
  return (
    <div className="w-fit flex flex-row justify-between items-center gap-4 py-8">
        <Button buttonVariant={false} buttonContent="Link Live"/>
        <Button buttonVariant={false} buttonContent="Link Github"/>
    </div>
  )
}

export default ProjectLinks