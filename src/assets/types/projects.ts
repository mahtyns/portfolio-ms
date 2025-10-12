// export interface Project {
//     project_name: string,
//     project_date: string,
//     project_description: string,
//     project_stack: Array<string>,
//     project_link_l: string,
//     project_link_gh: string,
//     project_img_src: string
// }

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