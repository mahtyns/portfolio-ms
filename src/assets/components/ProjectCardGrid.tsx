import ActiveCircle from "./ActiveCircle"
import ProjectCard from "./ProjectCard"

const ProjectCardGrid = () => {
  return (
    <>
    <div className="flex gap-2 xl:gap-12 w-full h-full items-center justify-center xl:basis-1/3 flex-wrap">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="prev" className="w-10 h-10 rotate-180" />
        </div>
        <ProjectCard />
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png" alt="next" className="w-10 h-10"/>
        </div>
    </div>
    <div className="w-full flex justify-center gap-4">
      <ActiveCircle />
      <ActiveCircle />
      <ActiveCircle />
      <ActiveCircle />
    </div>
  </>
  )
}

export default ProjectCardGrid