export interface Project {
    name: string,
    date: string,
    description: string,
    stack: string[],
    link_live?: string,
    link_github?: string,
    work_project: boolean,
    image: {
        image_src: string,
        image_alt: string,
    }
}

export type ProjectGalleryItems = Project[];