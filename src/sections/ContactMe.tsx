import { SectionTitle } from "../assets/components/basics/SectionTitle"

export const ContactMe = () => {
    return (
        <section id="contact" className="contact section-main section--gray-dark">
            <div className="contact__wrapper container">
                <SectionTitle sectionTitle="Let's create together" sectionVariant={false} textAlign="left" />
            </div>
        </section>
    )
}
