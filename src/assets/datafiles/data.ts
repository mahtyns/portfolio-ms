import { Project } from "../types/projects"
import { Exp } from "../types/experiences"
import { TechStack } from "../types/stack"

export const projects: Array<Project> = [
    {
        project_name: 'Volare Aerials',
        project_date: 'April 2023',
        project_description: 'Aerial school Volare page, created with React and Typescript. Used Tailwind for CSS styling, smooth scroll for links and framer motion for animations. First project to learn basics of TypeScript. ',
        project_stack: ['React', 'TypeScript', 'TailwindCSS', 'Framer-motion'],
        project_link_l: 'https://aerialclass.netlify.app',
        project_link_gh: 'https://github.com/mahtyns/aerialSchool',
        project_img_src: 'https://i.ibb.co/26Kvzts/volarethumb1.jpg'
    }, 
    {
        project_name: 'WalkingBooks',
        project_date: 'January 2023 - WIP',
        project_description: 'A project to practice and expand my React skills. An app that is similar to GoodReads, but with an option to share your books to other users, similar to Vinted. Made of four main modules: explore, user library, friends activity and book map. In the explore page, you can find new books to add to your library. In the user library, you can manage the status of your books and decide if you have any items to share. In the friends module, you can see what other people are up to, and in the map module, you can explore the books nearby if you want to read something new.',
        project_stack: ['React', 'JavaScript', 'classnames', 'FireBase', 'useContext'],
        project_link_l: 'https://walkingbooks.netlify.app/',
        project_link_gh: 'https://github.com/mahtyns/bookApp',
        project_img_src: 'https://i.ibb.co/cgLCZm5/books1.jpg'
    }, 
    {
        project_name: 'Ecommerce SPA Page',
        project_date: 'November 2021 - June 2022 (with further modifications)',
        project_description: 'Project created during DareIT Mentorship, using ReactJS and styled-components. A page made of main page, main product catalogue, about us page and cart page. You can add products to cart from the main catalogue, and then modify or delete the items from the cart. Then, you can choose the delivery option. The final order price is calculated.',
        project_stack: ['React', 'styled-components', 'react-router', 'functional components'],
        project_link_l: 'https://myshop-ecommerce.netlify.app/',
        project_link_gh: 'https://github.com/mahtyns/myshop-ecommerce-store',
        project_img_src: 'https://i.ibb.co/7rJgc8y/shop.jpg'
    }, 
    {
        project_name: 'PamApp Challenge',
        project_date: 'May 2021',
        project_description: 'Innovation Challenge by Reply Challenges, created in team with Edyta Przybysz - a 48h brainstorming run on 21-23 May 21. The objective was to propose UX improvements for the famous Fitness App run by Pam. Our idea was to create a bigger sense of community, increase the engagement and keep all the fitness information the user might need in one place. We have added some new functionalities and shifted the focus to the app user.',
        project_stack: ['Figma', 'Photoshop'],
        project_link_l: 'https://www.behance.net/gallery/122593259/Pam-App-Challenge',
        project_link_gh: '',
        project_img_src: 'https://i.ibb.co/z2kcryr/pamap.jpg'
    }, 
    {
        project_name: 'Sarai Spread redesign',
        project_date: 'November 2021 - June 2022 (with further modifications)',
        project_description: 'Webpage redesign for www.sarais.us, a shop with spreads. Added new modules: best recipes, reviews with the product link, newsletter subscription. Design both for desktop and mobile. Redesigning of the existing web to make it more intuitive and aesthetic.',
        project_stack: ['Figma', 'Photoshop'],
        project_link_l: 'https://www.behance.net/gallery/129222825/Sarais-web-page-refresh',
        project_link_gh: '',
        project_img_src: 'https://i.ibb.co/QmmZvYf/spread.jpg'
    }, 
    {
        project_name: 'Winelovers Shop',
        project_date: 'October 2020',
        project_description: 'Project for Domestika Course for HTML5, CSS3 and responsive web basics. A simple HTML5, CSS3 Project - a webpage for a Wine Store with wine courses available. Page with best products, reservation module and testimonials. The Domestika course explained basics of CSS animations, some advanced CSS styling and responsive design with Media Queries.',
        project_stack: ['HTML', 'CSS'],
        project_link_l: 'https://mahtyns.github.io/WineloversShop/',
        project_link_gh: 'https://github.com/mahtyns/WineloversShop',
        project_img_src: 'https://i.ibb.co/5hdQwtq/wine.jpg'
    }, 
    {
        project_name: 'Lab Portfolio Page',
        project_date: 'November 2021 - June 2022 (with further modifications)',
        project_description: 'Previous page with the showcase of my projects, about me page and contact module.',
        project_stack: ['React', 'classnames', 'functional components'],
        project_link_l: 'https://mahtyns-personalsite.netlify.app',
        project_link_gh: 'https://github.com/mahtyns/personalMartyna',
        project_img_src: 'https://i.ibb.co/JHxNmth/lab.jpg'
    }, 
    {
        project_name: 'Portfolio Page B&W',
        project_date: 'June 2023',
        project_description: '',
        project_stack: ['React', 'Typescript', 'Smooth scroll links', 'TailwindCSS'],
        project_link_l: 'https://martynasmolarek.netlify.app',
        project_link_gh: 'https://github.com/mahtyns/portfolio-ms',
        project_img_src: 'https://i.ibb.co/jVKQ8wk/portfolio.jpg'
    }, 

]

export const experiences: Array<Exp> = 
    [
        {
        experience_name: 'Web Designer at Le Guide Noir',
        experience_date: 'March 2021 - present',
            experience_descr: 'Planning & implementing digital e-commerce strategies for clients webpages to drive sales and grow site engagement for various brands; design frontend modules, working with our Product - research, analysis, improvements in the code. ',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },
        {
        experience_name: 'Architect at Agema Soluciones',
        experience_date: 'March 2019 - February 2021',
            experience_descr: 'Retail interior design & refurbishment projects for international chain brands; defining project plans from initial concept to completion. Maintained regular communication with clients and government officials to address concerns, provide updates',
        experience_cat: 'work',
        experience_details: ['project management']
        },
        {
        experience_name: 'Architect Assistant at Sweco',
        experience_date: 'October 2017 - June 2018',
            experience_descr: 'Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.',
        experience_cat: 'work',
        experience_details: ['parametric design', '3d modeling']
        },
        {
        experience_name: 'Erasmus+ Intern at GRX Arquitectos',
        experience_date: 'June 2017 - September 2017',
            experience_descr: 'Szybciej bijące serce, czerwienienie się, jąkanie, bezsenność, miękkie kolana. Co objawia się w taki sposób? I jaki ma z tym związek nasz ośrodek nagrody? Julia Fischer zaprasza w niesamowitą podróż po świecie emocji.',
        experience_cat: 'work',
        experience_details: ['HTML', 'CSS', 'JavaScript']
        },


        // Education experiences
        {
        experience_name: 'Master in Architecture',
        experience_date: 'September 2018 - May 2020',
            experience_descr: 'Studied at Universidad de Alcala de Henares, Madrid, Spain. Graduated in May 2020.',
        experience_cat: 'edu',
        experience_details: [' ']
        },
        {
        experience_name: 'Erasmus+ Exchange',
        experience_date: 'September 2014 - February 2015',
            experience_descr: 'Studied at Universidade de Lusiada, Lisbon, Portugal.',
        experience_cat: 'edu',
        experience_details: [' ']
        },
        {
        experience_name: 'Bachelor in Architecture',
        experience_date: 'September 2018 - May 2020',
            experience_descr: 'Studied at Warsaw University of Technology in Poland. Graduated in June 2016, then coursed 1 year of Masters (60ECTS) before moving to Spain.',
        experience_cat: 'edu',
        experience_details: [' ']
        },

        // Online courses 
        {
            experience_name: 'DareIT Mentorship Programme',
            experience_date: 'November 2021 - May 2022',
            experience_descr: 'Mentorship Programme for women, on path Fullstack Development. Creating projects with JavaScript and React, then connecting with PostgreSQL.',
            experience_cat: 'course',
            experience_details: ['react', 'styled-components', 'postgresql', ]
        },
        {
            experience_name: 'Programming in JavaScript',
            experience_date: 'August 2021 - November 2021',
            experience_descr: 'Udemy course for JavaScript programming: working with arrays, loops, objects and classes, handling events.',
            experience_cat: 'course',
            experience_details: ['javascript']
        },
        {
            experience_name: 'HTML5, CSS3 and Responsive web',
            experience_date: 'October 2020',
            experience_descr: 'Introduction to HTML5, CSS3 and responsive web - media queries. Animations, new semantic tags, gradients, shadows. Domestika course.',
            experience_cat: 'course',
            experience_details: ['HTML', 'CSS', 'Responsive web']
        },

]

export const aboutMe = "I'm Martyna, a Pole living in Madrid and a creative professional who recently underwent an inspiring transition from the world of architecture to the captivating universe of front-end development. My journey began in 2020, when I started learning frontend basics, and since then I've participated in various courses to broaden my knowledge and keep my skills up to date. To keep learning, I'm currently working on my own projects with React and JavaScript/Typescript. I have a keen eye for detail and a problem-solving mindset. I'm passionate about eye-catching designs and immersive user experiences. I'm always eager to learn and open to new challenges. Enjoy your stay on this page and don't hesitate to send me a message if you'd like."
export const aboutMeMobile = "I'm Martyna, a Pole living in Madrid and a creative professional who recently underwent an inspiring transition from the world of architecture to the captivating universe of front-end development. I started learning frontend basics, and I've participated in various FE courses to keep my skills up to date. I'm currently working on my own projects with React and JavaScript/Typescript. I have a keen eye for detail and a problem-solving mindset. I'm always eager to learn and open to new challenges. Enjoy your stay on this page and don't hesitate to send me a message if you'd like."

export const contactMe = "I'm always looking for a new challenge and possibilities of learning and growing. Want me in your team? Feel free to contact me and ask me anything you need to know."

export const skills = "I started learning FrontEnd development technologies in late 2020 while still in architecture sector. I've finished online courses for HTML5, CSS3 with animatons and responsive design, and JavaScript. I've also participated in Mentorship Programme for Women, DareIT where under the supervision of my mentor I created SPA projects with React. I'm currently learning TypeScript and Testing."


export const technology: Array<TechStack> = [
    {
        tech_name: 'React',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'JavaScript',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'TypeScript',
        tech_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'HTML',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'CSS',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Rest API',
        tech_img: 'https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Tailwind',
        tech_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Bootstrap',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Github',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
        tech_cat: 'other',
        tech_descr: ''
    },
    {
        tech_name: 'PostgreSQL',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',
        tech_cat: 'backend',
        tech_descr: ''
    },
    {
        tech_name: 'styled components',
        tech_img: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Responsive Web',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/65/65381.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Storybook',
        tech_img: 'https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Vite',
        tech_img: 'https://vitejs.dev/logo-with-shadow.png',
        tech_cat: 'other',
        tech_descr: ''
    },
    {
        tech_name: 'Sass',
        tech_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },
    {
        tech_name: 'Photoshop',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5210/5210800.png',
        tech_cat: 'design',
        tech_descr: ''
    },
    {
        tech_name: 'Illustrator',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5210/5210500.png',
        tech_cat: 'design',
        tech_descr: ''
    },
    {
        tech_name: 'Figma',
        tech_img: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
        tech_cat: 'design',
        tech_descr: ''
    },
    {
        tech_name: 'Indesign',
        tech_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247',
        tech_cat: 'design',
        tech_descr: ''
    },
    {
        tech_name: 'Canva',
        tech_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247',
        tech_cat: 'design',
        tech_descr: ''
    },
    {
        tech_name: 'Asana',
        tech_img: 'https://companieslogo.com/img/orig/ASAN-1325de11.png?t=1670917087',
        tech_cat: 'other',
        tech_descr: ''
    },
    {
        tech_name: 'npm',
        tech_img: 'https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png',
        tech_cat: 'other',
        tech_descr: ''
    },
    {
        tech_name: 'React Testing Library',
        tech_img: 'https://testing-library.com/img/octopus-128x128.png',
        tech_cat: 'frontend',
        tech_descr: ''
    },

]