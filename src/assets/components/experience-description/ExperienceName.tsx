type Props = {
  expName: string
}

const ExperienceName = (props: Props) => {
  return (
      <h3 className="font-playfair text-xl">{props.expName}</h3>
  )
}

export default ExperienceName