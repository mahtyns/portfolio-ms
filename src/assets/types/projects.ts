export interface Project {
    name: string,
    slug: string,
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

export interface ProjectDetails {
    slug: string,
    context: string,
    approach: string,
    implementation: string,
    outcome: string,
    extra: string,
}

export type ProjectGalleryItems = Project[];