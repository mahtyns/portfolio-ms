import ExperienceCard from "../components/ExperienceCard"
import ExperienceCardMobile from "../components/ExperienceCardMobile"
import {SectionTitle} from "../components/SectionTitle"
import useMediaQueries from "../hooks/useMediaQueries"

const Experience = () => {

    const isAboveLargeScren = useMediaQueries('(min-width: 1275px)')

    return (
        <section className={'bg-gray-100 xl:h-module-big py-16 xl:py-36 xl:px-24'}>
            <div className="flex items-center justify-center flex-col">
                <SectionTitle sectionTitle="Experiences." sectionVariant={true}/> 
                {isAboveLargeScren
                    ? <div className="flex flex-row gap-8 py-16">
                            <ExperienceCard/>
                            <ExperienceCard/>
                            <ExperienceCard/>
                        </div>
                    : <div className="py-6">
                        <ExperienceCardMobile/>
                        <div>
                          <p>Prev</p>
                          <p>Next</p>
                        </div>
                    </div>}

                <div
                    className="flex flex-row gap-6 text-lg uppercase font-lato font-light py-10">
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