import { SectionTitle } from "../components/SectionTitle"
import Button from "../components/Button"

const About = () => {
  return (
    <section className={'bg-main-dark h-module-big flex'}>
      <div className="py-36 px-36 w-1/2">
        <SectionTitle sectionTitle="About me." sectionVariant={false}/>
        <p className="text-xl text-gray-50 py-12 font-light font-lato leading-8 w-5/6">
          Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji. Po nitce neuronów do kłębka mózgu i fascynujących procesów biochemicznych zachodzących w całym naszym organizmie. Jej przepełniona emocjami książka pozwoli nam lepiej zrozumieć uczucia i dostrzec sygnały wysyłane przez nasze ciała.
        </p>
        <div className="invert">
        <Button buttonVariant={false} buttonContent="Resume"/>
        </div>
      </div>
      {/* <div className="w-1/2 bg-[url(https://i.ibb.co/vDkBVdP/luna.png)] bg-bottom-left">

      </div> */}
      <div className="w-1/2">

      </div>
    </section>
  )
}

export default About

