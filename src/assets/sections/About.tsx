import {SectionTitle} from "../components/SectionTitle"
import Button from "../components/Button"

const About = () => {

    const orbit = `rounded-full`
    const flex = `flex justify-center items-center`

    return (
        <section className={'bg-main-dark h-module-big flex'}>
            <div className="py-36 px-36 w-1/2">
                <SectionTitle sectionTitle="About me." sectionVariant={false}/>
                <p className="text-xl text-gray-50 py-12 font-light font-lato leading-8 w-5/6">
                    Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana.
                    Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody?
                    Julia Fischer zaprasza w niesamowitą podróż po świecie emocji. Po nitce neuronów
                    do kłębka mózgu i fascynujących procesów biochemicznych zachodzących w całym
                    naszym organizmie. Jej przepełniona emocjami książka pozwoli nam lepiej
                    zrozumieć uczucia i dostrzec sygnały wysyłane przez nasze ciała.
                </p>
                <div className="invert">
                    <Button buttonVariant={false} buttonContent="Resume"/>
                </div>
            </div>
            {/* <div className="w-1/2 bg-[url(https://i.ibb.co/vDkBVdP/luna.png)] bg-bottom-left">

      </div> */}
            <div className="w-1/2 overflow-hidden relative">
                <div
                    className={`${orbit} ${flex} w-[1220px] h-[1220px] border border-gray-500 absolute top-1/2 -right-96 -translate-y-[50%]`}>
                    <div className={`${orbit} ${flex} w-[950px] h-[950px] border border-gray-100 `}>
                        <div className={`${orbit} ${flex} w-[750px] h-[750px] border border-gray-500 `}>
                        <div className={`${orbit} ${flex} w-[730px] h-[730px] border border-gray-500 `}>
                        <div className={`${orbit} ${flex} w-[620px] h-[620px] border border-gray-100 `}>
                    <div className={`${orbit} ${flex} w-64 h-64 border border-gray-500 before:bg-gray-400 before:w-2 before:h-2 before:rounded-full before:absolute before:transform before:translate-y-32 animate-spin`}>
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
        </section>
    )
}

export default About
