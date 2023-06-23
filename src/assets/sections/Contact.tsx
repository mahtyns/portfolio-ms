import { SectionTitle } from "../components/SectionTitle"

const Contact = () => {

  return (
    <section className={'h-module-medium p-16 xl:py-36 xl:px-36'}>
      <div className="xl:w-1/2">
        <SectionTitle sectionTitle="Let's talk." sectionVariant={true}/>
        <p className="xl:w-5/6 py-8 font-lato  tracking-wide font-light text-lg">
          Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana.
          Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody?
          Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.
        </p>
        <p className="xl:w-5/6 font-lato tracking-wide font-light text-lg">
          Email: <span className="font-medium"><a href="mailto:m.smolarek19@gmail.com">m.smolarek19@gmail.com</a></span>
        </p>
        <p className="xl:w-5/6 font-lato tracking-wide font-light text-lg">
          Phone: <span className="font-medium"><a href="tel:34684211250">(+34) 684 211 250</a></span>
        </p>
      </div>
      <div className="xl:w-1/2">

      </div>
    </section>
  )
}

export default Contact