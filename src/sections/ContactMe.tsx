import { SectionTitle } from "../assets/components/basics/SectionTitle"

export const ContactMe = () => {
    return (
        <section id="contact" className="contact section-main section--gray-light">
            <div className="contact__wrapper container">
                <SectionTitle sectionTitle="Contact me." sectionVariant={true} />
            </div>
        </section>
    )
}
