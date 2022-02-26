import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1OFPCO4LUOn_hy2E1nP_fuzASu_eIUKQs/edit?usp=sharing&ouid=102524882000131465361&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'program_3.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'program_2.png',
    title: 'День второй',
    info: 'Тема 3. Планирование и бюджетирование подбора\n' +
        'План подбора. Стоимость вакансии, бюджет подбора. Эффективность подбора, метрики подбора. Воронка подбора.\n\n' +
        'Тема 4. Формирование HR-бренда работодателя\n' +
        'Формирование бренда работодателя: поведение рекрутера, своевременная обратная связь по этапам прохождения подбора, включая обработку сайтов трудоустройства. Путь кандидата.\n',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'program_1.jpg',
    title: 'День третий',
    info: 'Тема 5. Внутренние источники подбора: внутренняя мобильность персонала; реферальные программы\n' +
        'Внутренние: внутренняя мобильность персонала; реферальные программы\n\n' +
        'Тема 6. Внешние источники подбора\n',
    info2: '',
    url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  url: 'https://forms.gle/rNAjNQTpEsCE1zQE8',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
