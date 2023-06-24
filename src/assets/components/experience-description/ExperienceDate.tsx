type Props = {
  expDate: string
}

const ExperienceDate = (props: Props) => {
  return (
    <div className="font-lato font-light uppercase text-base py-2">
      {props.expDate}
    </div>
  )
}

export default ExperienceDate