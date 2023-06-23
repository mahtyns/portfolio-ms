import ProjectCardGrid from "../components/ProjectCardGrid"
import ProjectInfo from "../components/ProjectInfo"
import {SectionTitle} from "../components/SectionTitle"
import useMediaQueries from "../hooks/useMediaQueries"

const Projects = () => {

    const isAboveMediumScreen = useMediaQueries('(min-width: 1240px)')

    return (
        <section className={`bg-gray-100 xl:h-module-big`}>
            <div className={'flex xl:flex-row flex-col h-full w-full'}>
                {isAboveMediumScreen
                    ? <div className="w-full py-12 px-12 xl:w-1/2 xl:py-36 xl:px-36">
                            <ProjectCardGrid/>
                        </div>
                    : null}
                <div
                    className="w-full py-16 px-16 xl:w-1/2 bg-gray-50 h-full xl:py-36 xl:px-36">
                    <SectionTitle sectionTitle="My work." sectionVariant={true}/>
                    <ProjectInfo/>
                    {isAboveMediumScreen ? null : <p>prev next</p> }
                </div>
            </div>
        </section>
    )
}

export default Projects