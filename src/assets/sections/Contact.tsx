import { SectionTitle } from "../components/SectionTitle"
import { contactMe } from "../datafiles/data"

const Contact = () => {

  return (
    <section  id="contact" className={'h-module-medium p-16 xl:py-36 xl:px-36'}>
      <div className="xl:w-1/2">
        <SectionTitle sectionTitle="Let's talk." sectionVariant={true}/>
        <p className="xl:w-5/6 py-8 font-lato  tracking-wide font-light text-lg">
          {contactMe}
        </p>
        <p className="xl:w-5/6 font-lato tracking-wide font-light text-lg">
          Email: <span className="font-medium"><a href="mailto:m.smolarek19@gmail.com">m.smolarek19@gmail.com</a></span>
        </p>
      </div>
      <div className="xl:w-1/2">
           
      </div>
    </section>
  )
}

export default Contact