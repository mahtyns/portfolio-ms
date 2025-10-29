import { SectionTitle } from "../assets/components/basics/SectionTitle"
// import useMediaQueries from "../assets/hooks/useMediaQueries"
import about from '../assets/datafiles/about/about.json'

const About = () => {

    // const orbit = `rounded-full`
    // const flex = `flex justify-center items-center`
    // const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="about" className={'about section-main section--black dark:bg-gray-800'}>
            <div className="about__container">
                <SectionTitle sectionTitle="About me." sectionVariant={false} />
                <article>
                    <h3 className="about__intro">{about.intro}</h3>
                    <p className="about__description">{about.main_text}</p>
                    <p className="about__description">{about.extra_text}</p>
                    <p
                        className="about__languages">
                        {about.languages_text}<br /> {about.languages.map(language => <span className="about__languages-item">{language}</span>)}
                    </p>
                </article>
            </div>

            {/* {isAboveMediumScreen
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
                : null} */}

        </section>
    )
}

export default About
