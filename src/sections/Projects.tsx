import { SectionTitle } from "../assets/components/basics/SectionTitle"

const Projects = () => {
    return (
        <section id="projects" className="projects section-main section--white">
            <div className="projects__wrapper container">
                <SectionTitle sectionTitle="My projects." sectionVariant={true} />
            </div>
        </section>
    )
}

export default Projects