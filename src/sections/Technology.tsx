import { SectionTitle } from "../assets/components/basics/SectionTitle"
import { StackItem } from "../assets/components/stack/StackItem"
import tech from '../assets/datafiles/stack/stack.json'

export const Technology = () => {
    return (
        <section id="technology" className="technology section-main section--black">
            <div className="technology__wrapper container">
                <SectionTitle textAlign="left" sectionTitle={tech.title} sectionVariant={false} />
                <p className="technology__description">{tech.description}</p>
                <p className="technology__description">{tech.description_extra}</p>
                <div className="technology__stack">
                    <div className="technology__stack--main">
                        {
                            tech && tech.stack.slice(0, 6).map(item => <StackItem key={item.tech_name} {...item} />)
                        }
                    </div>
                    <div className="technology__stack--secondary">
                        {
                            tech && tech.stack.slice(6).map(item => <span>{item.tech_name}</span>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}