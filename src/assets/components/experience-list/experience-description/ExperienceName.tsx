type Props = {
  expName: string
}

const ExperienceName = (props: Props) => {
  return (
    <h3 className="experience__item__title">{props.expName}</h3>
  )
}

export default ExperienceName