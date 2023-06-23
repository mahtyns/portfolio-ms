import ExperienceCard from "../components/ExperienceCard"
import { SectionTitle } from "../components/SectionTitle"

const Experience = () => {
  return (
    <section className={'bg-gray-100 h-module-big py-36 px-24'}>
      <div className="flex items-center justify-center flex-col">
        <SectionTitle sectionTitle="Experiences." sectionVariant={true}/>
        <div className="flex flex-row gap-8 py-16">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
        <div className="flex flex-row gap-6 text-lg uppercase font-lato font-light py-10">
          <p>
            Work
          </p>
          <p>
            Education
          </p>
          <p>
            Courses
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience