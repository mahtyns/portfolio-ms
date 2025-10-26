type Props = {
  expDetails: Array<string>
}

const ExperienceDetail = (props: Props) => {
  return (
    <div className="experience__item__details">
      {props.expDetails.map(el => <p>{el}</p>)}
    </div>
  )
}

export default ExperienceDetail