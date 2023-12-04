import {SectionTitle} from "../components/SectionTitle"
import StackCard from "../components/StackCard"
import { skills, technology } from "../datafiles/data"
import { useState } from "react"

const Technology = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);


    // stack gallery functionality - change the shown set
    const perPage = 9;
    const startIndex = perPage * currentIndex;
    const endIndex = startIndex + perPage

    const handleNextSet = () => {
        setCurrentIndex(currentIndex + 1)
    }
    const handlePrevSet = () => {
        setCurrentIndex(currentIndex - 1)
    }

    console.log(Math.floor(technology.length / perPage))

    return (
        <section id="technology" className={'h-fit xl:h-module-medium xl:p-12 relative overflow-hidden py-10 -z-0'}>
            <div className="w-full flex flex-col-reverse xl:flex-row">
                <div className="xl:w-1/2 w-full xl:py-10 pt-4 p-2 xl:flex xl:flex-col xl:items-center xl:gap-12">
                    
                    {/* stack images map  */}
                    <div className="w-full h-full flex gap-4 xl:gap-12 justify-center items-center flex-wrap z-100 xl:w-1/2">
                        {technology.slice(startIndex, endIndex).map(element => <StackCard 
                        key={element.tech_name} 
                        stackImg={element.tech_img} 
                        stackName={element.tech_name}/>)}
                    </div>
                    <div className="flex w-full items-center justify-center gap-6 pt-8 z-40">
                        {currentIndex === 0 ? null : <div className="z-40" onClick={() => handlePrevSet()} >
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="prev" className="z-40 w-8 h-8 rotate-180 dark:invert" />
                        </div> }
                        {currentIndex === Math.floor(technology.length / perPage) ? null : <div className="z-40" onClick={() => handleNextSet()}>
                            <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="next" className="w-8 h-8 dark:invert" />
                        </div>}
                        
                    </div>
                </div>
                <div className="xl:w-1/2 xl:p-16 px-10">
                    <SectionTitle sectionTitle="My skills." sectionVariant={true}/>
                    <p className="xl:w-5/6 py-6 font-lato  tracking-wide font-light text-lg">{skills}</p>             
                </div>
            </div>

            {/* Squares backgroud  */}
            <div
                className="absolute -bottom-64 left-1/2 w-96 h-96 border border-gray-100 rotate-45 "></div>
            <div
                className="absolute -bottom-64 left-1/3 w-80 h-80 border border-gray-100 rotate-12"></div>
            <div
                className="absolute -bottom-36 left-1/2 w-64 h-64 border border-gray-200 rotate-6"></div>
            <div
                className="absolute -bottom-48 left-1/3 w-80 h-80 border border-gray-300 -rotate-12"></div>
            <div
                className="absolute -bottom-48 left-96 w-64 h-64 border border-gray-100 -rotate-6"></div>
            <div
                className="absolute -bottom-48 left-64 w-96 h-96 border border-gray-300 -rotate-45"></div>
            <div
                className="absolute -bottom-36 left-48 w-48 h-48 border border-gray-50 rotate-12"></div>

            <div
                className="absolute -bottom-64 right-1/3 w-64 h-64 border border-gray-200 rotate-45"></div>
            <div
                className="absolute -bottom-64 right-1/3 w-80 h-80 border border-gray-300 -rotate-[36deg]"></div>
            <div
                className="absolute -bottom-36 right-1/2 w-64 h-64 border border-gray-200 rotate-6"></div>
            <div
                className="absolute -bottom-48 right-1/3 w-80 h-80 border border-gray-300 rotate-[39deg]"></div>
            <div
                className="absolute -bottom-48 right-1/4 w-64 h-64 border border-gray-100 -rotate-6"></div>
            <div
                className="absolute -bottom-48 right-64 w-64 h-64 border border-gray-400 -rotate-45"></div>
            <div
                className="absolute -bottom-36 right-48 w-48 h-48 border border-gray-50 rotate-12"></div>

            <div
                className="absolute bottom-64 right-96 w-24 h-24 border border-gray-300 rotate-12"></div>
            <div
                className="absolute bottom-72 right-96 w-12 h-12 border border-gray-400 -rotate-12"></div>
            <div
                className="absolute bottom-64 right-80 w-6 h-6 border border-gray-400 rotate-45"></div>

            {/* End squares      */}
        </section>
    )
}

export default Technology