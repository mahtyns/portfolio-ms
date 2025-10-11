import { SectionTitle } from "../assets/components/basics/SectionTitle"
import intro from "../assets/datafiles/intro/intro.json"

const Intro = () => {
    return (
        <section id="intro" className="intro section-main section--gray-light">
            <SectionTitle sectionTitle="Let me tell you more about me." sectionVariant={true} />
            <h3 className="intro__subtitle">{intro.subtitle}</h3>
            <div className="intro__kpis__wrapper">
                {
                    intro.items.map(item => <div className="intro__kpis__item">
                        <h4 className="intro__kpis__title">{item.name}</h4>
                        <p className="intro__kpis__description">{item.description}</p>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Intro