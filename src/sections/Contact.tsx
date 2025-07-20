import { SectionTitle } from "../assets/components/basics/SectionTitle"
import { contactMe } from "../assets/datafiles/contact/contact"

const Contact = () => {

  return (
    <section  id="contact" className={'contact dark:bg-main-dark'}>
      <div className="contact__wrapper">
        <SectionTitle sectionTitle="Let's talk." sectionVariant={true}/>
        <p className="contact__description">
          {contactMe}
        </p>
        <p className="contact__link">
          Email: <span className="contact__link--bold"><a href="mailto:m.smolarek19@gmail.com">m.smolarek19@gmail.com</a></span>
        </p>
      </div>
    </section>
  )
}

export default Contact