import LaravelStack from '@/components/atoms/svg/LaravelStack';
import PhpStack from '@/components/atoms/svg/PhpStack';
import VueStack from '@/components/atoms/svg/VueStack';
import FlutterStack from '@/components/atoms/svg/FlutterStack';
import ReactStack from '@/components/atoms/svg/ReactStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';

interface ShowcaseItem {
  image?: string;
  title?: string;
  alt?: string;
  icons?: { id: string; icon: React.ReactNode; name: string }[];
  description?: string;
  github?: string;
  liveDemo?: string;
}

const showcases = (theme: 'light' | 'dark'): ShowcaseItem[] => [
  {
    image: '/images/showcase/stock.wisnuprawira.xyz.jpeg',
    title: 'Stock+',
    alt: 'Stock+',
    icons: [
      {
        id: 'laravel',
        icon: <LaravelStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Laravel',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
    ],
    description: 'Create a website to determine which stocks are the best by using the AHP method.',
    github: 'https://github.com/Wisnuprawira/Stock-.git',
    liveDemo: 'https://stock.wisnuprawira.xyz',
  },
  {
    image: '/images/showcase/pos.wisnuprawira.xyz.jpeg',
    title: 'POS Website',
    alt: 'POS Website',
    icons: [
      {
        id: 'laravel',
        icon: <LaravelStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Laravel',
      },
      {
        id: 'Vue',
        icon: <VueStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Vue',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
    ],
    description:
      'Created a web-based Point of Sale (POS) application designed to streamline business operations with features like inventory management, sales tracking, and reporting.',
    github: 'https://github.com/Wisnuprawira/tugas_akhir_eduwork',
    liveDemo: 'https://pos.wisnuprawira.xyz/login',
  },
  {
    image: '/images/showcase/pig.wisnuprawira.xyz.jpeg',
    title: 'Profile Indah Gypsum',
    alt: 'Profile Indah Gypsum',
    icons: [
      {
        id: 'reactnative',
        icon: (
          <ReactStack
            $className="w-6 h-6"
            $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
            $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
          />
        ),
        name: 'React Native',
      },
      {
        id: 'php',
        icon: <PhpStack $className="w-9 h-9 dark:text-white fill-current" />,
        name: 'PHP',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
    ],
    description: `Built a website for Indah Gypsum's company profile. The website is used as a website interface for Profile Indah Gypsum.`,
    github: 'https://github.com/Wisnuprawira/Company_Profile.git',
    liveDemo: 'https://pig.wisnuprawira.xyz',
  },
  {
    image: '/images/showcase/showcase-banner.png',
    title: 'Coffe Apps',
    alt: 'Coffe Apps',
    icons: [
      {
        id: 'flutter',
        icon: <FlutterStack $className="w-5 h-5 dark:text-white fill-current" />,
        name: 'Flutter',
      },
      {
        id: 'php',
        icon: <PhpStack $className="w-9 h-9 dark:text-white fill-current" />,
        name: 'PHP',
      },
    ],
    description: `Developed an online coffee ordering application that allows users to customize their orders, participate in loyalty programs, and receive real-time notifications.`,
    github: 'https://github.com/Wisnuprawira/apps_coffe',
    liveDemo: '/',
  },
  {
    image: '/images/showcase/toko-online.wisnuprawira.xyz.jpeg',
    title: 'Marketplace (PHP)',
    alt: 'Marketplace (PHP)',
    icons: [
      {
        id: 'php',
        icon: <PhpStack $className="w-9 h-9 dark:text-white fill-current" />,
        name: 'PHP',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
    ],
    description: `The application enables users to browse products, manage carts, and complete purchases through a straightforward interface, delivering a smooth online shopping experience.`,
    github: 'https://github.com/Wisnuprawira/toko-online',
    liveDemo: 'https://toko-online.wisnuprawira.xyz',
  },
];

export default showcases;
