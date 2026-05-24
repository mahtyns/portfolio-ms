
type IntroCardProps = {
    image_src: string,
    name: string,
    description: string
}

const IntroCard = (props: IntroCardProps) => {
    return (
        <div className="intro__card">
            <picture><img className="intro__card__image" src={props.image_src} alt={props.name} /></picture>
            <div className="intro__card__title">
                <h2>{props.name}</h2>
            </div>
            <div className="intro__card__description">
                {props.description}
            </div>
        </div>
    )
}

export default IntroCard