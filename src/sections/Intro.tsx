import { SectionTitle } from "../assets/components/basics/SectionTitle"
import IntroItem from "../assets/components/intro/IntroItem"
import intro from "../assets/datafiles/intro/intro.json"

const Intro = () => {
    return (
        <section id="intro" className="intro section-main section--gray-light">
            <SectionTitle sectionTitle="Let me tell you more about me." sectionVariant={true} />
            <h3 className="intro__subtitle">{intro.subtitle}</h3>
            <div className="intro__kpis__wrapper">
                {
                    intro.items.map(item => <IntroItem title={item.name} description={item.description} />)
                }
            </div>
        </section>
    )
}

export default Intro