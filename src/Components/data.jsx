import todoImg from '../assets/todo-app.jpg';
import eCommerceImg from '../assets/e-commerce.jpg'
import easybankImg from '../assets/easybank.png'
import crowfundingImg from '../assets/crowdfunding.png'
import manutdImg from '../assets/manutd.png'

export const projects = [
    {
        id:1,
        img: todoImg,
        title: 'Todo App',
        technologies: [
            'React', 'Sass','Context API'
        ],
        github: 'https://github.com/ChideraOzoagu/Todo-app',
        liveSite: 'https://live-todo-app.netlify.app',
    },
    {
        id:2,
        img: eCommerceImg,
        title: 'E-commerce product',
        technologies: [
            'React', 'CSS','useReducer'
        ],
        github: 'https://github.com/ChideraOzoagu/E-commerce-product-page',
        liveSite: 'https://chidera-product-page.netlify.app',
    },
    {
        id:3,
        img: easybankImg,
        title: 'Easybank homepage',
        technologies: [
            'React', 'Sass','AOS'
        ],
        github: 'https://github.com/ChideraOzoagu/easybank',
        liveSite: 'https://easybank-live.netlify.app',
    },
    {
        id:4,
        img: crowfundingImg,
        title: 'Crowdfunding page',
        technologies: [
            'HTML', 'CSS', 'JavaScript'
        ],
        github: 'https://github.com/ChideraOzoagu/Crowdfundingpage',
        liveSite: 'https://crowdfundingpage-fem.netlify.app',
    },
    {
        id:5,
        img: manutdImg,
        title: 'ManUtd trophy counter',
        technologies: [
            'HTML', 'CSS', 'JavaScript'
        ],
        github: 'https://github.com/ChideraOzoagu/Last-won-a-trophy',
        liveSite: 'https://manutd-last-trophy.netlify.app',
    },
]