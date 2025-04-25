import {useState} from 'react'
import ExperienceCard from "../components/ExperienceCard"
import ExperienceCardMobile from "../components/ExperienceCardMobile"
import {SectionTitle} from "../components/SectionTitle"
import useMediaQueries from "../hooks/useMediaQueries"
import { experiences } from "../datafiles/data"


const Experience = () => {

    const isAboveLargeScren = useMediaQueries('(min-width: 1275px)')
    const [expCategory, setExpCategory] = useState<string>('work')

    //Experiences on mobile
    const experienceFiltered = experiences.filter(elem => elem.experience_cat === `${expCategory}`)
    const [experienceIndex, setExperienceIndex] = useState<number>(0)

    const handleNextIndex = () => {
        if (experienceIndex === experienceFiltered.length - 1) {
            setExperienceIndex(0)
        }
        else setExperienceIndex(experienceIndex + 1)
    }

    const handlePrevIndex = () => {
        if (experienceIndex === 0) {
            setExperienceIndex(experienceFiltered.length - 1)
        }
        else setExperienceIndex(experienceIndex - 1)
    }

    return (
        <section id="experience" className={'bg-gray-100 xl:h-module-big py-16 xl:py-36 xl:px-24 dark:bg-gray-800'}>
            <div className="flex items-center justify-center flex-col">
                <SectionTitle sectionTitle="Experiences." sectionVariant={true}/> 
                {/* A grid of 3 cards on desktop screens  */}
                {isAboveLargeScren
                    ?   <div className="flex flex-row gap-8 py-16 items-center">
                        {/* <div >
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="prev" className="w-10 h-10 rotate-180" />
                        </div> */}
                        {experiences
                        .filter(elem => elem.experience_cat === `${expCategory}`)
                        .slice(0, 3)
                        .map( (elem, ind) => <ExperienceCard 
                            key={ind} 
                            expName={elem.experience_name} 
                            expDate={elem.experience_date}
                            expDescr={elem.experience_descr}
                            expDetails={elem.experience_details}
                            expCat={elem.experience_cat}
                            />)}     
                        {/* <div >
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="next" className="w-10 h-10"/>
                        </div> */}
                        </div>
                    : <div className="py-6">
                        <ExperienceCardMobile 
                            expName={experienceFiltered[experienceIndex].experience_name}
                            expDate={experienceFiltered[experienceIndex].experience_date}
                            expDescr={experienceFiltered[experienceIndex].experience_descr}
                            expDetails={experienceFiltered[experienceIndex].experience_details}
                            expCat={experienceFiltered[experienceIndex].experience_cat}
                            handleNextIndex={handleNextIndex}
                            handlePrevIndex={handlePrevIndex} />
                    </div>}


                {/* Experience categories to choose                  */}
                <div
                    className="flex flex-row gap-6 text-lg uppercase py-2 font-lato font-light xl:pt-10 xl:pb-4">
                    <p 
                    onClick={()=>setExpCategory('work')}
                    className={`hover:underline hover:underline-offset-4 hover:transition hover:ease-in-out hover:duration-[3s] ${expCategory === 'work' ? 'underline underline-offset-4' : null}`}>
                        Work
                    </p>
                    <p 
                    onClick={() => setExpCategory('edu')}
                    className={`hover:underline hover:underline-offset-4 hover:transition hover:ease-in-out hover:duration-[3s] ${expCategory === 'edu' ? 'underline underline-offset-4' : null}` }>
                        Education
                    </p>
                    <p 
                    onClick={() => setExpCategory('course')}
                    className={`hover:underline hover:underline-offset-4 hover:transition hover:ease-in-out hover:duration-[3s] ${expCategory === 'course' ? 'underline underline-offset-4' : null}`}>
                        Courses
                    </p>
                </div>
                <div>
                    <span className='uppercase text-gray-500'>Find more on my <a className='underline' href="https://www.linkedin.com/in/msmolarek/" target="_blank">Linkedin Page</a>.</span>
                </div>
            </div>
        </section>
    )
}

export default Experience