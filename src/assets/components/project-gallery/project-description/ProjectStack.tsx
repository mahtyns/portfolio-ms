type Props = {
    projectStack: string[]
}

const ProjectStack = (props: Props) => {
    return (
        <div className="projects__description__stack dark:text-gray-300">
            {props.projectStack.map((tech, index) => (
                <span key={index}>{tech}</span>
            ))}
        </div>
    )
}

export default ProjectStack