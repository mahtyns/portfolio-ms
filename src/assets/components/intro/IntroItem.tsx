interface IntroItemProps {
    title: string,
    description: string,
}

const IntroItem = (props: IntroItemProps) => {
    return (
        <div className="intro__kpis__item">
            <h4 className="intro__kpis__title">{props.title}</h4>
            <p className="intro__kpis__description">{props.description}</p>
        </div>
    )
}

export default IntroItem