import Button from "../assets/components/basics/Button"
import { SectionTitle } from "../assets/components/basics/SectionTitle"
import { contactMe } from '../assets/datafiles/contact/contact'

export const ContactMe = () => {
    return (
        <section id="contact" className="contact section-main section--gray-dark">
            <div className="contact__wrapper container">
                <SectionTitle sectionTitle="Let's talk" sectionVariant={false} textAlign="left" />
                <p className="contact__description">
                    {contactMe}
                </p>
                <div className="contact__buttons">
                    <Button buttonVariant={true} buttonContent="martyna.smolarek19@gmail.com" handleOnClick={() => window.location.href =
                        "mailto:martyna.smolarek19@gmail.com?subject=Portfolio Contact&body=Hi Martyna,"} />
                    <Button buttonVariant={false} buttonContent="Linkedin" handleOnClick={() => window.open('https://www.linkedin.com/in/msmolarek/')} />
                </div>
            </div>
        </section>
    )
}
