type Props = {
    expDescr: string
}

const ExperienceDescription = (props: Props) => {
    return (
        <div className="experience__item__description">
            {props.expDescr}
        </div>
    )
}

export default ExperienceDescription