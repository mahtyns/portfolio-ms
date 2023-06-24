import {useState} from 'react'
import ExperienceCard from "../components/ExperienceCard"
import ExperienceCardMobile from "../components/ExperienceCardMobile"
import {SectionTitle} from "../components/SectionTitle"
import useMediaQueries from "../hooks/useMediaQueries"
import { experiences } from "../datafiles/data"


const Experience = () => {

    const isAboveLargeScren = useMediaQueries('(min-width: 1275px)')
    const [expCategory, setExpCategory] = useState<string>('work')

    return (
        <section id="experience" className={'bg-gray-100 xl:h-module-big py-16 xl:py-36 xl:px-24'}>
            <div className="flex items-center justify-center flex-col">
                <SectionTitle sectionTitle="Experiences." sectionVariant={true}/> 
                {/* A grid of 3 cards on desktop screens  */}
                {isAboveLargeScren
                    ?   <div className="flex flex-row gap-8 py-16 items-center">
                        <div >
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="prev" className="w-10 h-10 rotate-180" />
                        </div>
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
                        <div >
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="next" className="w-10 h-10"/>
                        </div>
                        </div>
                    : <div className="py-6">
                        <ExperienceCardMobile 
                            expName={experiences[0].experience_name}
                            expDate={experiences[0].experience_date}
                            expDescr={experiences[0].experience_descr}
                            expDetails={experiences[0].experience_details}
                            expCat={experiences[0].experience_cat} />
                    </div>}


                {/* Experience categories to choose                  */}
                <div
                    className="flex flex-row gap-6 text-lg uppercase font-lato font-light py-10">
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
            </div>
        </section>
    )
}

export default Experience