import {SectionTitle} from "../components/SectionTitle"
import Button from "../components/Button"
import useMediaQueries from "../hooks/useMediaQueries"

const About = () => {

    const orbit = `rounded-full`
    const flex = `flex justify-center items-center`
    const isAboveMediumScreen = useMediaQueries('(min-width: 1024px)')

    return (
        <section id="about" className={'bg-main-dark xl:h-module-big flex xl:flex-row flex-col'}>
            <div className="p-16 xl:p-36 xl:w-1/2">
                <SectionTitle sectionTitle="About me." sectionVariant={false}/>
                <p
                    className="text-lg xl:text-xl text-gray-50 py-12 font-light font-lato leading-8 xl:w-5/6 tracking-wide">
                    Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana.
                    Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody?
                    Julia Fischer zaprasza w niesamowitą podróż po świecie emocji. Po nitce neuronów
                    do kłębka mózgu i fascynujących procesów biochemicznych zachodzących w całym
                    naszym organizmie. Jej przepełniona emocjami książka pozwoli nam lepiej
                    zrozumieć uczucia i dostrzec sygnały wysyłane przez nasze ciała.
                </p>
                <div className="invert">
                    <a href="https://drive.google.com/file/d/1CTbO3_29Qt3iKLAJXI5m7CBFaqr2R-Jt/view?usp=sharing" target="_blank">
                    <Button buttonVariant={false} buttonContent="Resume"/>
                    </a>
                </div>
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
                                                className={`${orbit} ${flex} w-64 h-64 border border-gray-500 before:bg-gray-400 before:w-2 before:h-2 before:rounded-full before:absolute before:transform before:translate-y-32 animate-spin`}>
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
