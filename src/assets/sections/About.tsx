import {SectionTitle} from "../components/SectionTitle"
// import Button from "../components/Button"
import useMediaQueries from "../hooks/useMediaQueries"
import { aboutMe, aboutMeMobile } from "../datafiles/data"

const About = () => {

    const orbit = `rounded-full`
    const flex = `flex justify-center items-center`
    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="about" className={'bg-main-dark xl:h-module-big flex xl:flex-row flex-col dark:bg-gray-800'}>
            <div className="p-12 xl:p-36 xl:w-1/2">
                <SectionTitle sectionTitle="About me." sectionVariant={false}/>
                <article>
                <p
                    className="text-base xl:text-xl text-gray-50 pt-12 font-light font-lato leading-8 xl:w-5/6 tracking-wide">
                    {isAboveMediumScreen ? aboutMe : aboutMeMobile}
                </p>
                <p
                    className="text-lg xl:text-xl text-gray-50 py-8 font-light font-lato leading-8 xl:w-5/6 tracking-wide">
                    You can send me a message in:<br/> Polish · English · Spanish
                </p>
                {/* <div className="invert dark:invert-0">
                    <Button buttonVariant={false} buttonContent="Resume" handleOnClick={() => window.open('https://drive.google.com/file/d/1CTbO3_29Qt3iKLAJXI5m7CBFaqr2R-Jt/view?usp=sharing')}/>
                </div> */}
                </article>
            </div>

            {isAboveMediumScreen
                ? <div className="w-1/2 overflow-hidden relative">
                        <div
                            className={`${orbit} ${flex} w-[1220px] h-[1220px] border border-gray-500 absolute top-1/2 -right-96 -translate-y-[50%]`}>
                            <div className={`${orbit} ${flex} w-[950px] h-[950px] border border-gray-100 `}>
                                <div className={`${orbit} ${flex} w-[750px] h-[750px] border border-gray-500 `}>
                                    <div className={`${orbit} ${flex} w-[730px] h-[730px] border border-gray-500 `}>
                                        <div className={`${orbit} ${flex} w-[620px] h-[620px] border border-gray-100 `}>
                                            <div
                                                className={`${orbit} ${flex} w-64 h-64 border border-gray-500 before:bg-special-500 before:w-2 before:h-2 before:rounded-full before:absolute before:transform before:translate-y-32 animate-spin`}>
                                                <div className={`${orbit} ${flex} w-48 h-48 border border-gray-100 `}>
                                                    <div className={`${orbit} ${flex} w-36 h-36 border border-gray-100 `}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                : null}

        </section>
    )
}

export default About
