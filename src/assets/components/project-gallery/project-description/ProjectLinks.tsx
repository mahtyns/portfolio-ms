import Button from "../../basics/Button"

type Props = {

}

const ProjectLinks = (props: Props) => {

  return (
    <div className="w-fit flex flex-row justify-between items-center gap-4 py-8">
      {/* {
        liveLink && (
          <Button buttonVariant={false} buttonContent="Link Live" handleOnClick={() => window.open(liveLink)} />
        )
      }
      {
        githubLink && (
          <Button buttonVariant={false} buttonContent="Link Github" handleOnClick={() => window.open(githubLink)} />
        )
      } */}
      <Button buttonContent="Live" buttonVariant={true} handleOnClick={() => null} />
      <Button buttonContent="Code" buttonVariant={false} handleOnClick={() => null} />
    </div>
  )
}

export default ProjectLinks