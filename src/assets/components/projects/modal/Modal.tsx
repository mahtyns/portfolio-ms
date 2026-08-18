import { useEffect } from 'react'
import { useState } from 'react'
import { ProjectDetails } from "../../../types/projects";

interface ModalProps {
    project: ProjectDetails
    onClose: () => void
}

const CLOSE_DURATION = 500

export const Modal = ({ project, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        if (isClosing) return
        setIsClosing(true)
        window.setTimeout(onClose, CLOSE_DURATION)
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <div
            className={`projects__modal${isClosing ? ' projects__modal--closing' : ''}`}
            onClick={handleOverlayClick}
        >
            <div
                className={`projects__modal__container${isClosing ? ' projects__modal__container--closing' : ''}`}
            >
                <div className="projects__modal__topbar">
                    <div className="projects__modal__topbar__title">
                        {project.name}
                    </div>
                    <div className="projects__modal__topbar__close" onClick={onClose}>
                        <img src="/images/ui/close.png" alt="Close the modal" />
                    </div>
                </div>
                <div className="projects__modal__content">
                    <div className="projects__modal__content__block">
                        <span className="projects__modal__content__title">Context:</span>
                        {project.context}
                    </div>
                    {
                        project.images && project.images[0] && <div className="projects__modal__content__image"><img src={project.images[0].url} alt={project.images[0].alt} />
                            <span>{project.images[0].alt}</span></div>
                    }
                    <div className="projects__modal__content__block">
                        <span className="projects__modal__content__title">Approach:</span>
                        {project.approach}
                    </div>
                    {
                        project.images && project.images[1] && <div className="projects__modal__content__image"><img src={project.images[1].url} alt={project.images[1].alt} />
                            <span>{project.images[1].alt}</span></div>
                    }
                    <div className="projects__modal__content__block">
                        <span className="projects__modal__content__title">Implementation:</span>
                        {project.implementation}
                    </div>
                    {
                        project.images && project.images[2] && <div className="projects__modal__content__image"><img src={project.images[2].url} alt={project.images[2].alt} />
                            <span>{project.images[2].alt}</span></div>
                    }
                    <div className="projects__modal__content__block">
                        <span className="projects__modal__content__title">Outcome:</span>
                        {project.outcome}
                    </div>
                    {
                        project.images && project.images[3] && <div className="projects__modal__content__image"><img src={project.images[3].url} alt={project.images[3].alt} />
                            <span>{project.images[3].alt}</span></div>
                    }
                    {
                        project.extra && <div className="projects__modal__content__block">{project.extra}</div>
                    }
                </div>
            </div>
        </div>
    )
}