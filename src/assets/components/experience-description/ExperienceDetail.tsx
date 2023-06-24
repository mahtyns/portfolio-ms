type Props = {
  expDetails: Array<string>
}

const ExperienceDetail = (props:Props) => {
  return (
      <div className="font-lato font-medium uppercase text-sm py-2 flex gap-3">
        {props.expDetails.map(el => <p>{el}</p>)}
      </div>
  )
}

export default ExperienceDetail