import { SectionTitle } from "../components/SectionTitle"

const Projects = () => {
  return (
    <section className={`bg-gray-100 h-module-big`}>
      <div className={'flex h-full'}>
        <div className="w-1/2 py-36 px-36">

        </div>
        <div className="w-1/2 bg-gray-50 h-full py-36 px-36">
        <SectionTitle sectionTitle="My work." sectionVariant={true}/>
        </div>
      </div>
    </section>
  )
}

export default Projects