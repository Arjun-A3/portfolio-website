
import { StringKeyValueType } from '@/lib/types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  //facebook: 'https://www.facebook.com/vatsalsinghkv',
  instagram: 'https://www.instagram.com/just._.arju/',
  twitter: 'https://x.com/Arjun_cym',
  github: 'https://github.com/Arjun-A3',
  linkedin: 'https://www.linkedin.com/in/arjun-a-carb/',
};

export const author = {
  name: 'Arjun A Chandran',
  email: 'arjun43250@gmail.com',
};

export const seoData = {
  title: 'Arjun A Chandran | Software Engineer',
  description:
    'Arjun A Chandran is a Software Engineer who specializes in building and testing Sotware projects.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Arjun',
    'Arjun A Chandran',
    '@arjun',
    'Arjunachandran',
    'Portfolio',
    'arjun Portfolio ',
    'arjun a chandran Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Arjun A Chandran.',
  tagline: 'I\'m an Engineer trying to do better every day',
  description:
    "Trying to make a difference from the god's own country.",
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: 'Currently learning and experimenting on Javascript Technologies, SoftSkills and Competitive Programming.',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'ReactJs',
      'Ajax-Jquery',
      'ExpressJs',
      'SQL',
      'MongoDB',
      'JavaScript',
      'Java',
      'SpringBoot'
    ],
  },
  img: '/pp.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Tech Stacks',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Explore the software world and learn about emerging Technologies',
        'Taking managerial roles and conducting events',
        'Contributing to open-source software',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        // {
        //   name: 'typeScript',
        //   icon: 'vscode-icons:file-type-typescript-official',
        // },
        { name: 'java', icon: 'vscode-icons:file-type-jar' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'UI/UX designing',
    //   lottie: {
    //     light: '/lotties/designing.json',
    //     dark: '/lotties/designing-dark.json',
    //   },
    //   points: [
    //     'Experience in designing user-friendly interfaces with figma',
    //     'Experience in developing design systems and style guides',
    //     'Providing user-friendly design solutions',
    //   ],
    //   softwareSkills: [
    //     { name: 'figma', icon: 'logos:figma' },
    //     { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
    //     { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
    //   ],
    // },
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Spencer Soft',
      companyUrl: 'https://www.linkedin.com/in/spencersoft-coimbatore-846369b9/?originalSubdomain=in',
      role: 'Implant-Trainee',
      started: 'December 2022',
      upto: 'December 2022',
      tasks: [
        'Created a  software in Java',
        'Worked on netbeans.',
        'Developed a simple funcitonal authentication page intergated with SQL',
      ],
    },
    // {
    //   company: 'SHMTH Capital',
    //   companyUrl: 'https://shmth.capital/',
    //   role: 'frontend developer intern',
    //   started: 'april 2023',
    //   upto: 'july 2023',
    //   tasks: [
    //     'Built trading platform using TradingView library.',
    //     'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
    //     'Collaborated with diverse nationwide team of developers.',
    //   ],
    // },
    // {
    //   company: 'webnetics',
    //   companyUrl: 'https://webnetic.vercel.app/',
    //   role: 'frontend developer',
    //   started: 'june 2022',
    //   upto: 'january 2023',
    //   tasks: [
    //     'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
    //     'Architected the folder structure and initial setup of the app.',
    //     'Reviewed and approved multiple Pull requests.',
    //     'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'STUDYREPO:education-with-seamless-collaboration-and-digital-access.',
      url: 'https://github.com/Arjun-A3/studyRepo',
      repo: 'https://github.com/Arjun-A3/studyRepo',
      img: 'https://github.com/Arjun-A3/studyRepo/assets/110415386/1805c7e6-9271-4bd3-b879-e861a2a055d3',
      year: 2023,
      tags: ['Java','Spring','React','MongoDB','Javascript','Html','CSS'],
    },
    {
      id: getId(),
      name: 'Recruitment-Filtration-for-Enterprises-using-ML-model',
      url: 'https://github.com/Arjun-A3/Recruitment-Filtration-for-Enterprises-using-ML-model',
      repo: 'https://github.com/Arjun-A3/Recruitment-Filtration-for-Enterprises-using-ML-model',
      img: 'https://github.com/Arjun-A3/studyRepo/assets/110415386/d008aabb-4441-473c-ab52-f0edbd71c2a9',
      year: 2024,
      tags: ['ML model', 'gradio' ,'python','data filteration','OneAPI Optimistaion'],
    },
    {
      id: getId(),
      name: 'User Registration and Profile Management System',
      url: 'https://github.com/Arjun-A3/Guvi-web',
      repo: 'https://github.com/Arjun-A3/Guvi-web',
      img: 'https://github.com/Arjun-A3/Guvi-web/assets/110415386/58050296-87eb-4d53-81d5-419054858b7b',
      year: 2024,
      tags: ['JavaScript (with jQuery)', 'PHP' ,'MySQL','MongoDB','Redis'],
    }
    // {
    //   id: getId(),
    //   name: 'image animations',
    //   url: 'https://image-animations.vercel.app/',
    //   repo: 'https://github.com/vatsalsinghkv/image-animations',
    //   img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
    //   year: 2023,
    //   tags: ['CSS Animations', 'Sass'],
    // },
    // // {
    // //   id: getId(),
    // //   name: 'fylo landing page',
    // //   url: 'https://fylo-kv.netlify.app/',
    // //   repo: 'https://github.com/vatsalsinghkv/fylo',
    // //   img: 'https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png',
    // //   year: 2023,
    // //   tags: ['Html', 'Tailwind', 'TS'],
    // // },
    // {
    //   id: getId(),
    //   name: 'remotive jobs',
    //   url: 'https://remotive-jobs.vercel.app/',
    //   repo: 'https://github.com/vatsalsinghkv/remotive-jobs',
    //   img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
    //   year: 2022,
    //   tags: ['Nextjs', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'countries app',
    //   url: 'https://countries-app-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/rest-countries-api',
    //   img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
    //   year: 2022,
    //   tags: ['React', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'rock paper scissors',
    //   url: 'https://rock-paper-scissors-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/rock-paper-scissors',
    //   img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
    //   year: 2022,
    //   tags: ['React', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'todo app',
    //   url: 'https://todo-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/todo-app',
    //   img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
    //   year: 2022,
    //   tags: ['React', 'Sass', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'weather app',
    //   url: 'https://weather-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/weather-app',
    //   img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
    //   year: 2022,
    //   tags: ['Html', 'sass', 'JS', 'jQuery'],
    // },
    // {
    //   id: getId(),
    //   name: 'blogr landing page',
    //   url: 'https://blogr-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
    //   img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
    //   year: 2021,
    //   tags: ['html', 'sass', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'natours',
    //   url: 'https://natours-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/natours',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223114-b4f64b44-2501-49c9-9fb7-b8e53fe654c6.png',
    //   year: 2021,
    //   tags: ['html', 'sass', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'nexter',
    //   url: 'https://vatsalsinghkv.github.io/nexter/',
    //   repo: 'https://github.com/vatsalsinghkv/nexter',
    //   img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
    //   year: 2021,
    //   tags: ['html', 'sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'IP address tracker',
    //   url: 'https://vatsalsinghkv.github.io/ip-address-tracker/',
    //   repo: 'https://github.com/vatsalsinghkv/ip-address-tracker',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223386-03bcaa20-e649-4b3d-8709-59e42c6d685a.png',
    //   year: 2021,
    //   tags: ['html', 'bootstrap', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'calculator app',
    //   url: 'https://vatsalsinghkv.github.io/calculator-app/',
    //   repo: 'https://github.com/vatsalsinghkv/calculator-app/',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223825-3b68d696-39c6-490c-9433-f315b7efccbd.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'pig game',
    //   url: 'https://vatsalsinghkv.github.io/pig-game/',
    //   repo: 'https://github.com/vatsalsinghkv/pig-game',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223527-de7fde7a-244e-4db5-8e33-d561afad6084.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'bankist marketing',
    //   url: 'https://vatsalsinghkv.github.io/bankist-marketing/',
    //   repo: 'https://github.com/vatsalsinghkv/bankist-marketing',
    //   img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'digital clock',
    //   url: 'https://vatsalsinghkv.github.io/digital-clock/',
    //   repo: 'https://github.com/vatsalsinghkv/digital-clock',
    //   img: 'https://user-images.githubusercontent.com/68834718/210226274-a453ba15-9b83-4577-a84d-e4b88e0a5605.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    // {
    //   icon: 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Modified  by Arjun A Chandran and designed by Vitsal Singh',
  link: 'https://github.com/Arjun-A3/portfolio-website',
};
