import ProjectCard from "./ProjectCard"

const ProjectCardGrid = () => {
  return (
    <div className="flex gap-2 xl:gap-6 w-full justify-center xl:basis-1/3 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default ProjectCardGrid