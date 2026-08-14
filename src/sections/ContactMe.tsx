import Button from "../assets/components/basics/Button"
import { SectionTitle } from "../assets/components/basics/SectionTitle"

export const ContactMe = () => {
    return (
        <section id="contact" className="contact section-main section--gray-dark">
            <div className="contact__wrapper container">
                <SectionTitle sectionTitle="Let's create together" sectionVariant={false} textAlign="left" />
                <ul className="contact__description">
                    <li><span>Location:</span> Madrid</li>
                    <li><span>Stack:</span> React · TypeScript · NextJS</li>
                    <li><span>Github:</span> @mahtyns</li>
                </ul>
                <div className="contact__buttons">
                    <Button buttonVariant={true} buttonContent="martyna.smolarek19@gmail.com" handleOnClick={() => window.location.href =
                        "mailto:martyna.smolarek19@gmail.com?subject=Portfolio Contact&body=Hi Martyna,"} />
                    <Button buttonVariant={false} buttonContent="Linkedin" handleOnClick={() => window.open('https://www.linkedin.com/in/msmolarek/')} />
                </div>
            </div>
        </section>
    )
}
