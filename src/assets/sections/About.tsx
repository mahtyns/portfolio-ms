import { SectionTitle } from "../components/SectionTitle"

const About = () => {
  return (
    <section className={'bg-main-dark h-module-medium py-12 px-24'}>
      <div>
        <SectionTitle sectionTitle="Something about me." sectionVariant={false}/>
      </div>
    </section>
  )
}

export default About