import { useState } from "react"
// import ActiveCircle from "../components/ActiveCircle"
import ProjectCardGrid from "../components/ProjectCardGrid"
import ProjectInfo from "../components/ProjectInfo"
import {SectionTitle} from "../components/SectionTitle"
import useMediaQueries from "../hooks/useMediaQueries"
import { projects } from "../datafiles/data"

const Projects = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1240px)')
    const [projectIndShown, setProjectIndShown] = useState(0)

    const handleNextProject = () => {
        if (projectIndShown === projects.length - 1) {
            setProjectIndShown(0)
        }
        else setProjectIndShown(projectIndShown + 1)
    }

    const handlePrevProject = () => {
        if (projectIndShown === 0) {
            setProjectIndShown(projects.length - 1)
        }
        else setProjectIndShown(projectIndShown - 1)
    }



    return (
        <section id="projects" className={`bg-gray-100 xl:h-module-big`}>
            <div className={'flex xl:flex-row flex-col h-full w-full'}>
                {isAboveMediumScreen
                    ? <div className="w-full py-12 px-10 xl:w-1/2 xl:py-36 xl:px-36 ">
                        <ProjectCardGrid 
                        projects={projects} 
                        projectIndShown={projectIndShown} 
                        handleNextProject={handleNextProject}
                        handlePrevProject={handlePrevProject} />
                      </div>
                    : null}
                <div className="w-full py-16 px-10 xl:w-1/2 bg-gray-50 h-full xl:py-36 xl:px-36">
                    <SectionTitle sectionTitle="My work." sectionVariant={true}/>
                    <ProjectInfo projects={projects} projectIndShown={projectIndShown} />
                    {isAboveMediumScreen ? null : <div className="flex w-full justify-center gap-4 pt-2">
                        <div className="flex justify-center gap-24 py-2">
                            {/* Mobile view arrows to change projects  */}
                            <div onClick={() => handlePrevProject()} >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png"
                                    alt="prev"
                                    className="w-10 h-10 rotate-180" />
                            </div>
                            <div onClick={() => handleNextProject()} >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png"
                                    alt="next"
                                    className="w-10 h-10" />
                            </div>
                        </div>
                    </div> }
                </div>
            </div>
        </section>
    )
}

export default Projects