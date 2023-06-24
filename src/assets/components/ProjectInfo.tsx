import ProjectDate from "./project-description/ProjectDate"
import ProjectLinks from "./project-description/ProjectLinks"
import ProjectTitle from "./project-description/ProjectTitle"
import ProjectDescription from "./project-description/ProjectDescription"
import useMediaQueries from "../hooks/useMediaQueries"

const ProjectInfo = () => {

  const isAboveMediumScreen = useMediaQueries('(min-width: 1240px)')

  return (
    <article className="xl:py-16 pt-10" >
      {isAboveMediumScreen ? null : <img src="https://i.pinimg.com/originals/5b/7a/d2/5b7ad2d541475ac4f3be0f1606f19c66.gif" alt="project" className="w-full h-64 object-cover mb-8" />}
        <ProjectTitle projectTitle="First Project"/>
        <ProjectDate projectDate="May 2203"/>
        <ProjectDescription projectDescription="Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji. Po nitce neuronów do kłębka mózgu i fascynujących procesów biochemicznych zachodzących w całym naszym organizmie. Jej przepełniona emocjami książka pozwoli nam lepiej zrozumieć uczucia i dostrzec sygnały wysyłane przez nasze ciała.
"/>
        <ProjectLinks />
    </article>
  )
}

export default ProjectInfo