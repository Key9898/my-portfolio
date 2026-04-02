const AsiaYouthsAssociation = '/Showcase/asia_youths_association.png'
const EBookNook = '/Showcase/e_book_nook.png'
const EasyGo = '/Showcase/easy_go.png'
const EvergreenHill = '/Showcase/evergreen_hill.png'
const EzMyanmar = '/Showcase/ez_myanmar.png'
const IDueCare = '/Showcase/i_due_care.png'
const AbhidhammaSociety = '/Showcase/abhidhamma_society.png'
const HeavenlyFlowers = '/Showcase/heavenly_flowers.png'
const OldPortfolio = '/Showcase/old_portfolio.png'
const StackPackBundler = '/Showcase/stackpack_bundler.png'

export interface ButtonData {
  label: string
  url: string
}

export interface Post {
  id: number
  title: string
  description: string
  imageAlt: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  date: string
  category: { title: string }
  tags: string[]
  button: ButtonData | ButtonData[]
  developer: {
    name: string
    role: string
  }
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Asia Youths Association',
    description:
      'Empowering young leaders through a streamlined digital presence. This informational website was developed for the Asia Youths Association (AYA), a youth-led non-profit organization based in Mae Sot, Thailand. Built entirely with WordPress, the site aims to showcase their programs, leadership training, and advocacy work.',
    imageAlt: 'Asia Youths Association',
    image: {
      mobile: AsiaYouthsAssociation,
      tablet: AsiaYouthsAssociation,
      desktop: AsiaYouthsAssociation,
    },
    date: 'MAY, 2025',
    category: { title: 'WordPress' },
    tags: ['WordPress', 'PHP', 'CSS3'],
    button: { label: 'Live Demo', url: 'https://asiayouths.org/' },
    developer: {
      name: 'Wunna Aung',
      role: 'WordPress Developer',
    },
  },
  {
    id: 2,
    title: 'E-Book Nook',
    description:
      'Enhancing the digital reading experience with intuitive library management. A digital sanctuary for book lovers, this web application offers a curated collection of e-books with a focus on user experience, featuring a responsive reader interface and personalized bookshelves.',
    imageAlt: 'E-Book Nook',
    image: {
      mobile: EBookNook,
      tablet: EBookNook,
      desktop: EBookNook,
    },
    date: 'DEC, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Firebase'],
    button: [
      { label: 'Live Demo', url: 'https://e-book-nook.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/E-Book-Nook' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
  {
    id: 3,
    title: 'EasyGo',
    description:
      'Simplifying car rentals to save time and effort for busy travelers. A comprehensive car rental platform aimed at simplifying the booking process, featuring real-time availability checking, an extensive fleet gallery, and a user-friendly reservation system.',
    imageAlt: 'EasyGo',
    image: {
      mobile: EasyGo,
      tablet: EasyGo,
      desktop: EasyGo,
    },
    date: 'DEC, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Firebase'],
    button: [
      { label: 'Live Demo', url: 'https://easy-go-phi.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/EasyGo' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
  {
    id: 4,
    title: 'EZ Myanmar',
    description:
      'Providing accessible digital solutions for growing local businesses. A company website developed for "EZ Myanmar," focused on delivering simple yet effective digital services and responsive site features through WordPress development.',
    imageAlt: 'EZ Myanmar',
    image: {
      mobile: EzMyanmar,
      tablet: EzMyanmar,
      desktop: EzMyanmar,
    },
    date: 'AUG, 2025',
    category: { title: 'WordPress' },
    tags: ['WordPress', 'Elementor', 'CSS3'],
    button: { label: 'Live Demo', url: 'https://ezmyanmar.com/' },
    developer: {
      name: 'Team Collabration',
      role: 'WordPress Development',
    },
  },
  {
    id: 5,
    title: 'IDueCare',
    description:
      'Optimizing professional service delivery through a clean, corporate web interface. A technology company website focused on simplifying business services in Myanmar, implemented using WordPress to ensure high-performance design and functionality.',
    imageAlt: 'IDue Care',
    image: {
      mobile: IDueCare,
      tablet: IDueCare,
      desktop: IDueCare,
    },
    date: 'AUG, 2025',
    category: { title: 'WordPress' },
    tags: ['WordPress', 'CSS3', 'PHP'],
    button: { label: 'Live Demo', url: 'https://iduecare.com/' },
    developer: {
      name: 'Team Collabration',
      role: 'WordPress Development',
    },
  },
  {
    id: 6,
    title: 'StackPack Bundler',
    description:
      'Boosting developer productivity with seamless asset bundling and real-time previews. A powerful tool designed to streamline the project bundling process, featuring code minification and an intuitive dashboard for modern web developers.',
    imageAlt: 'StackPack Bundler',
    image: {
      mobile: StackPackBundler,
      tablet: StackPackBundler,
      desktop: StackPackBundler,
    },
    date: 'NOV, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Node.js'],
    button: [
      { label: 'Live Demo', url: 'https://stack-pack-bundler.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/StackPack-Bundler' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
  {
    id: 7,
    title: 'The Evergreen Hill',
    description:
      'Showcasing hotel elegance through a fast, elegant, and custom-coded hotel platform. A visually-driven static website developed for a hotel in Kalaw, using a modern React stack to ensure an elegant and ultra-responsive user experience.',
    imageAlt: 'The Evergreen Hill',
    image: {
      mobile: EvergreenHill,
      tablet: EvergreenHill,
      desktop: EvergreenHill,
    },
    date: 'OCT, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    button: [
      { label: 'Live Demo', url: 'https://the-evergreen-hill.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/The-Evergreen-Hill' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
  {
    id: 8,
    title: 'Heavenly Flowers',
    description:
      'Driving floral sales with a visually stunning and responsive modern storefront. A visually elegant website developed for a conceptual flower shop, creating an aesthetically pleasing user interface to showcase floral products and services.',
    imageAlt: 'Heavenly Flowers',
    image: {
      mobile: HeavenlyFlowers,
      tablet: HeavenlyFlowers,
      desktop: HeavenlyFlowers,
    },
    date: 'SEP, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    button: [
      { label: 'Live Demo', url: 'https://heavenly-flowers.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/Heavenly-Flowers' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
  {
    id: 9,
    title: 'Abhidhamma Society',
    description:
      'Facilitating spiritual learning by organizing complex Dhamma resources online. An informational website designed to share teachings and resources, featuring a structured WordPress implementation for easy content accessibility.',
    imageAlt: 'Abhidhamma Society',
    image: {
      mobile: AbhidhammaSociety,
      tablet: AbhidhammaSociety,
      desktop: AbhidhammaSociety,
    },
    date: 'JUN, 2025',
    category: { title: 'WordPress' },
    tags: ['WordPress', 'PHP', 'CSS3'],
    button: { label: 'Live Demo', url: 'https://abhidhammasociety.com/' },
    developer: {
      name: 'Wunna Aung',
      role: 'WordPress Developer',
    },
  },
  {
    id: 10,
    title: 'My Portfolio',
    description:
      'Showcasing personal brand and technical expertise through high-quality frontend development. A custom-built portfolio designed to demonstrate skills in building clean, responsive, and aesthetically pleasing React applications.',
    imageAlt: 'My Old Portfolio',
    image: {
      mobile: OldPortfolio,
      tablet: OldPortfolio,
      desktop: OldPortfolio,
    },
    date: 'JUL, 2025',
    category: { title: 'React' },
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    button: [
      { label: 'Live Demo', url: 'https://my-portfolio-pi-nine-36.vercel.app/' },
      { label: 'View GitHub', url: 'https://github.com/Key9898/my-portfolio' },
    ],
    developer: {
      name: 'Wunna Aung',
      role: 'Frontend Developer',
    },
  },
]
