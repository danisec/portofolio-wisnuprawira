import CpuIcon from '@/components/atoms/svg/Cpu';
import ServerIcon from '@/components/atoms/svg/Server';
import CommandIcon from '@/components/atoms/svg/Command';
import SmartphoneIcon from '@/components/atoms/svg/Smartphone';
import BarChartIcon from '@/components/atoms/svg/BarChart';

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <CpuIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Full Stack Development',
    description:
      'Building web applications from frontend to backend using Laravel, Vue.js, and PHP.',
  },
  {
    icon: <ServerIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Backend Development',
    description: 'Developing robust and scalable backend systems with Laravel and PHP.',
  },
  {
    icon: <CommandIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Frontend Development',
    description:
      'Creating interactive and user-friendly interfaces with Vue.js and modern frameworks.',
  },
  {
    icon: <SmartphoneIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Mobile App Development',
    description: 'Building cross-platform mobile applications using Flutter.',
  },
  {
    icon: <BarChartIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Data Science & Analytics',
    description: 'Exploring data-driven solutions and insights with technology.',
  },
];

export default services;
