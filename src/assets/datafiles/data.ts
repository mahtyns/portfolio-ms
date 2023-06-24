import { Project } from "../types/projects"
import { Exp } from "../types/experiences"

export const projects: Array<Project> = [
    {
        project_name: 'Volare aerials',
        project_date: 'April 2023',
        project_description: 'Aerial school Volare page, created with React and Typescript. Used Tailwind for CSS styling, smooth scroll for links and framer motion for animations',
        project_stack: ['React', 'TypeScript', 'TailwindCSS', 'Framer-motion'],
        project_link_l: 'https://aerialclass.netlify.app',
        project_link_gh: 'https://github.com/mahtyns/aerialSchool',
        project_img_src: 'https://i.ibb.co/26Kvzts/volarethumb1.jpg'
    }, 
    {
        project_name: 'WalkingBooks',
        project_date: 'January 2023 - WIP',
        project_description: '',
        project_stack: ['React', 'JavaScript', 'classnames', 'FireBase'],
        project_link_l: 'https://app.netlify.com/sites/walkingbooks/overview',
        project_link_gh: 'https://github.com/mahtyns/bookApp',
        project_img_src: 'https://i.ibb.co/cgLCZm5/books1.jpg'
    }, 

]

export const experiences: Array<Exp> = 
    [
        {
        experience_name: 'Web Designer at Le Guide Noir',
        experience_date: 'March 2021 - present',
            experience_descr: 'Stars',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },
        {
        experience_name: 'Architect at Agema Soluciones',
        experience_date: 'March 2019 - February 2021',
            experience_descr: 'Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },
        {
        experience_name: 'Architect Assistant at Sweco',
        experience_date: 'October 2017 - June 2018',
            experience_descr: 'Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },
        {
        experience_name: 'Erasmus+ Intern at GRX Arquitectos',
        experience_date: 'June 2017 - September 2017',
            experience_descr: 'Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },
]