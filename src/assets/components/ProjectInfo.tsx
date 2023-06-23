import ProjectDate from "./project-description/ProjectDate"
import ProjectLinks from "./project-description/ProjectLinks"
import ProjectTitle from "./project-description/ProjectTitle"
import ProjectDescription from "./project-description/ProjectDescription"

const ProjectInfo = () => {
  return (
    <article className="py-16" >
        <ProjectTitle projectTitle="First Project"/>
        <ProjectDate projectDate="May 2203"/>
        <ProjectDescription projectDescription="Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji. Po nitce neuronów do kłębka mózgu i fascynujących procesów biochemicznych zachodzących w całym naszym organizmie. Jej przepełniona emocjami książka pozwoli nam lepiej zrozumieć uczucia i dostrzec sygnały wysyłane przez nasze ciała.
"/>
        <ProjectLinks />
    </article>
  )
}

export default ProjectInfo