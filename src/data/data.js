import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portofolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portofolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portofolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portofolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portofolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portofolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portofolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portofolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portofolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portofolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portofolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import testimonial1 from '../images/testimonials/1.png';
import testimonial2 from '../images/testimonials/2.png';
import testimonial3 from '../images/testimonials/3.png';


/**
 * Page meta data
 */
export const homePageMeta = {
  title: 'Dhafin CV.',
  description: "CV",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Galeri',
  Resume: 'Education',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'poems\\poetry',
};

/**
 * Hero section
 */
export const heroData = {
  imageSrc: heroImage,
  name: `I'm Dhafin Mukti Al Farizi.`,
  description: (
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Hai, Saya <strong className="text-stone-100"> Dhafin Mukti Al Farizi </strong> dan saat ini saya mahasiswa di <strong className="text-stone-100"> Universitas Jenderal
      Soedirman </strong>, saat ini saya bekerja sampingan di <strong  className="text-stone-100"> Naver Z Corporation </strong> sebagai Support Creator, saya memiliki minat dibidang <strong className="text-stone-100">Desain Grafis, Internet
      Marketing, Fotografi Analog, Puisi, Penulis Naskah dan Penyutradaraan</strong>, Saya juga memiliki ketertarikan
      di beberapa olahraga, seperti <strong className="text-stone-100">Taekwondo,
      Bola Basket, Bulu Tangkis, dan Berenang.</strong>
    </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'CV Download',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData = {
  profileImageSrc: profilepic,
  description: `Ingin berkenalan lebih jauh dengan saya?`,
  aboutItems: [
    {label: 'Location', text: 'kab Bekasi, Indonesia', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Fotografi Analog, Internet Marketing, dan Desain Grafis', Icon: SparklesIcon},
    {label: 'Study', text: 'Universitas Jenderal Soedirman', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Naver Z Corporation | Support Creator', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills = [
  {
    name: 'Bahasa',
    skills: [
      {
        name: 'Indonesia',
        level: 9,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Japan',
        level: 5,
      },
    ],
  },
  {
    name: 'Pemrograman',
    skills: [
      {
        name: 'HTML & CSS',
        level: 9,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'LARAVEL',
        level: 7,
      },
      {
        name: 'React.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Skills',
    skills: [
      {
        name: 'Team Work',
        level: 9,
      },
      {
        name: 'Directing',
        level: 8.5,
      },
      {
        name: 'Communication',
        level: 8.5,
      },
      {
        name: 'ScriptWriting',
        level: 8,
      },
      {
        name: 'Internet Marketing',
        level: 7,
      },
      {
        name: 'Design Graphic',
        level: 6.5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems = [
  {
    title : "Cibubur",
    description: "7 July 2022",
    image: porfolioImage1,
    roll : "Kodak vision 3 200t",
    url : "https://www.instagram.com/p/Cfrdqo4vXug/"
  },
  {
    title : "Purwokerto",
    description: "22 Agustus",
    image: porfolioImage2,
    roll : "kodak colorplus 200",
    url: "https://www.instagram.com/p/ChjfsOypD5Y/"
  },
  {
    title : "Purwokerto",
    description: "22 Agustus",
    image: porfolioImage3,
    roll : "kodak colorplus 200",
    url: "https://www.instagram.com/p/ChjfsOypD5Y/"
  },
  {
    title : "Purwokerto",
    description: "22 Agustus",
    image: porfolioImage4,
    roll : "kodak colorplus 200",
    url: "https://www.instagram.com/p/ChjfsOypD5Y/"
  },
  {
    title: "Perpusnas",
    description: "26 Agustus",
    image: porfolioImage5,
    roll : "Kodak vision 3 200",
    url : "https://www.instagram.com/p/CfrkQP6v1yr/"
  },
  {
    title : "Purwokerto",
    description: "26 Agustus",
    image: porfolioImage6,
    roll : `kodak colorplus 200`,
    url: "https://www.instagram.com/p/ChupTzPp--D/"
  },
  {
    title : "Purwokerto",
    description: "26 Agustus",
    image: porfolioImage7,
    roll : `kodak colorplus 200`,
    url: "https://www.instagram.com/p/ChupTzPp--D/"
  },
  {
    title : "Purwokerto",
    description: "26 Agustus",
    image: porfolioImage8,
    roll : `kodak colorplus 200`,
    url: "https://www.instagram.com/p/ChupTzPp--D/"
  },
  {
    title : "Purwokerto",
    description: "22 Agustus",
    image: porfolioImage9,
    roll : "kodak colorplus 200",
    url: "https://www.instagram.com/p/ChjfsOypD5Y/"
  },
  {
    title : "Purwokerto",
    description: "26 Agustus",
    image: porfolioImage10,
    roll : `kodak colorplus 200`,
    url: "https://www.instagram.com/p/ChupTzPp--D/"
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education = [
  {
    date: '2010 - 2016',
    location: 'SDN Telanjung 02',
    title: 'Sekolah Dasar',
    content:
      <ul className=' list-none lg:list-disc'>
        <li>Sering mendapat peringkat 5 besar di kelas</li>
        <li>Termasuk 10 siswa terbaik di angkatan</li>
      </ul>,
  },
  {
    date: '2016 - 2019',
    location: 'MTsN 1 Bekasi',
    title: 'Sekolah Menengah Pertama',
    content:
      <ul className=' list-none lg:list-disc'>
        <li>Aktif di Organisasi Intra Sekolah</li>
      </ul>,
  },
  {
    date: '2019 - 2022',
    location: 'SMK Negeri 2 Kota Bekasi',
    title: 'Sekolah Menengah Kejuruan',
    content:
      <ul className=' list-none lg:list-disc'>
        <li>Masuk di jurusan Rekayasa Perangkat Lunak</li>
        <li>Mendapatkan Sertifikat LSP</li>
      </ul>,
  },
  {
    date: '2022 - Sekarang',
    location: 'Universitas Jenderal Soedirman',
    title: 'Universitas',
    content:
      <ul className=' list-none lg:list-disc'>
        <li>Menempuh pendidikan di Fakultas Ilmu Budaya, Jurusan Bahasa Inggris</li>
      </ul>,
  },
];

/*
 * experience section
*/
export const experience  = [
  {
    date : "2022 - Sekarang",
    location : "Universitas Jenderal Soedirman",
    title : "GEMA, Garasi Seni Mahasiswa Fakultas Ilmu Budaya Universitas Jenderal Soedirman"
  },
  {
    date: '2019 - 2021',
    location: 'SMKN 2 Kota Bekasi',
    title: 'Basketball',
    content: "",
  },
  {
    date: '2016 - 2018',
    location: 'Koramil 06 setu',
    title: 'Taekwondo',
    content: "",
  },
  {
    date: '2016 - 2019',
    location: 'MTsN 1 Bekasi',
    title: 'OSIS',
    content: "",
  }
];

/**
 * Testimonial section
 */
export const testimonial = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'distorsiamimpi',
      text: ' ~ Sajak sajak pemimpi; Bait I ~ <br/>Sudut struktur tubuhku terbuat dari rasa rindu dari kalbu permata itu..... <br/>Angkasa pikiran yang terbentang menawarkan opsi membangun dan menghancurkan..... <br/>Istana mimpi yang dipimpin oleh sang tirani.... ',
      image: testimonial1,
    },
    {
      name: 'distorsiamimpi',
      text: '~  Sajak sajak Arsa; Bait I ~ <br/>Sebuah malamimpi yang mengangkasa..... <br/> Nirmala pikiran yang bersenandung diantara dua nada.... <br/> Dua nada yang menjadi sayap di istana pikiran dalam kepala..... ',
      image: testimonial3,
    },
    {
      name: 'distorsiamimpi',
      text: '~ Sajak sajak Elena; Bait I ~ <br/>Awan yang menyelimuti istana pikiran.... <br/> Warna abu - abu yang kusam ditelan kata - kata... <br/> Cahaya refleksi yang memukul mundur langit yang ambisi....',
      image: testimonial2,
    },
  ],
};

/**
 * Contact section
 */
export const contact = {
  headerText: 'Get in touch.',
  description: 'Hubungi Saya di',
  items: [
    {
      type: 'Email',
      text: 'dhafinalfa2112@gmail.com',
      href: '/',
    },
    {
      type: 'Location',
      text: 'kab Bekasi, Indonesia',
      href: '',
    },
    {
      type: 'Instagram',
      text: '@dhafin_alf24',
      href: 'https://www.instagram.com/dhafin_alf24/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Dhafin24'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dhafinalfarizi24/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dhafin_alf24'},
];
