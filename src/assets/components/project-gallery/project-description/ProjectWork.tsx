
type ProjectWorkProps = {
    projectWork: boolean
}

const ProjectWork = (props: ProjectWorkProps) => {
    return (
        <div className={`projects__description__work projects__description__work--${props.projectWork ? 'work' : 'personal'}`}>
            {props.projectWork ? 'Work project' : 'Personal project'}
        </div>
    )
}

export default ProjectWork