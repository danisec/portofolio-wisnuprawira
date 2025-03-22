'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import LaravelStack from '@/components/atoms/svg/LaravelStack';
import VueStack from '@/components/atoms/svg/VueStack';
import FlutterStack from '@/components/atoms/svg/FlutterStack';
import ReactStack from '@/components/atoms/svg/ReactStack';
import BootstrapStack from '@/components/atoms/svg/BootstrapStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import MongodbStack from '@/components/atoms/svg/MongodbStack';

function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid theme flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null
  if (!mounted) return null;

  const techStacks = [
    {
      icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Laravel',
    },
    {
      icon: <VueStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Vue',
    },
    {
      icon: <FlutterStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Flutter',
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
    },
    {
      icon: <BootstrapStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Bootstrap',
    },
    {
      icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'MySQL',
    },
    {
      icon: <MongodbStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'MongoDB',
    },
  ];

  return (
    <>
      <div className={clsx(['relative'], ['w-full'], ['overflow-hidden'])}>
        <div className={clsx(['top-0 bottom-0 left-0'], ['z-50'], ['w-24'])}>
          <div className={clsx(['animate-scroll'], ['flex'], ['gap-6'], ['w-max lg:min-w-max'])}>
            {[...techStacks, ...techStacks].map((stack, index) => (
              <div
                key={index}
                className={clsx(['flex flex-row'], ['items-center'], ['shrink-0'], ['gap-2'])}
              >
                <div>{stack.icon}</div>
                <span className={clsx(['ms:text-base text-sm'], ['font-semibold'])}>
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
