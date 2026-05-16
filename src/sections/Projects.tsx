import Button from "../assets/components/basics/Button";
import { SectionTitle } from "../assets/components/basics/SectionTitle"
import { DesignCard } from "../assets/components/projects/design/DesignCard"
import projects from '../assets/datafiles/projects/projects.json'

const Projects = () => {

    const projectList = projects.project_list;

    return (
        <section id="projects" className="projects section-main section--white">
            <div className="projects__wrapper projects--code container">
                <div className="projects__text">
                    <SectionTitle sectionTitle="My projects" sectionVariant={true} textAlign="left" />
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                </div>
                <div className="projects__content">

                </div>
            </div>
            <div className="projects__wrapper container projects--design">
                <SectionTitle sectionTitle="Design" sectionVariant={true} textAlign="right" />
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                <div className="projects__cards">
                    {projectList.slice(0, 3).map(item => <DesignCard />)}
                </div>
                <Button buttonContent="Show more" buttonVariant={false} handleOnClick={() => null} />
            </div>
        </section>
    )
}

export default Projects