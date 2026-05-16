import { SectionTitle } from "../assets/components/basics/SectionTitle"

export const ContactMe = () => {
    return (
        <section id="contact" className="contact section-main section--gray-light">
            <div className="contact__wrapper container">
                <SectionTitle sectionTitle="Let's create together" sectionVariant={true} textAlign="left" />
            </div>
        </section>
    )
}
