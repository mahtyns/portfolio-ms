interface IntroItemProps {
    title: string,
    description: string,
    src: string
}

const IntroItem = (props: IntroItemProps) => {
    return (
        <div className="intro__kpis__item">
            <img src={props.src} alt={props.title} className="intro__kpis__image" />
            <h4 className="intro__kpis__title">{props.title}</h4>
            <p className="intro__kpis__description">{props.description}</p>
        </div>
    )
}

export default IntroItem