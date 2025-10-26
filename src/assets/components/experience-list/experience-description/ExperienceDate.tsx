type Props = {
  expDate: string
}

const ExperienceDate = (props: Props) => {
  return (
    <div className="experience__item__date">
      {props.expDate}
    </div>
  )
}

export default ExperienceDate