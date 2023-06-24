type Props = {
    expDescr: string
}

const ExperienceDescription = (props : Props) => {
    return (
        <div className="py-2 font-lato tracking-wide font-light text-lg px-8">
            {props.expDescr}
        </div>
    )
}

export default ExperienceDescription