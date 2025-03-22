import LaravelStack from '@/components/atoms/svg/LaravelStack';
import VueStack from '@/components/atoms/svg/VueStack';
import FlutterStack from '@/components/atoms/svg/FlutterStack';
import ReactStack from '@/components/atoms/svg/ReactStack';
import BootstrapStack from '@/components/atoms/svg/BootstrapStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import MongodbStack from '@/components/atoms/svg/MongodbStack';
import GithubStack from '@/components/atoms/svg/Github';

interface TechStackItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const techStacks = (theme: 'light' | 'dark'): TechStackItem[] => [
  {
    icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Laravel',
    description: 'Framework PHP',
  },
  {
    icon: <VueStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Vue',
    description: 'JavaScript Framework',
  },
  {
    icon: <FlutterStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Flutter',
    description: 'Cross Platform Applications',
  },
  {
    icon: (
      <ReactStack
        $className="w-6 h-6 lg:w-8 lg:h-8"
        $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
        $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
      />
    ),
    name: 'React Native',
    description: 'Mobile Applications',
  },
  {
    icon: <BootstrapStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Bootstrap',
    description: 'CSS Framework',
  },
  {
    icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'MySQL',
    description: 'Database',
  },
  {
    icon: <MongodbStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'MongoDB',
    description: 'NoSQL Database',
  },
  {
    icon: <GithubStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Github',
    description: 'Version Control',
  },
];

export default techStacks;
