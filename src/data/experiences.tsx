interface ExperienceItem {
  id?: number;
  institution?: string;
  logo?: string;
  alt?: string;
  title?: string;
  period?: string;
  work?: string;
  descriptionType?: 'paragraph' | 'list';
  description?: string | string[];
  detail?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    institution: 'Eduwork',
    logo: '/images/logo/eduwork.png',
    alt: 'Eduwork Logo',
    title: 'Website Developer',
    period: 'Apr 2024 — Aug 2024',
    work: 'Internship',
    descriptionType: 'list',
    description: [
      'Contributed significantly to the development of the Eduwork Library website, completing 70% of the project over a 5-month period.',
      'Utilized Laravel, Vue.js, and PHP to build the website, ensuring dynamic and responsive functionalities; implemented Vue.js components for a seamless user interface and smooth navigation, developed the backend with Laravel, creating RESTful APIs and integrating with MySQL databases.',
      'Employed Bootstrap within Vue.js to ensure the website is mobile-friendly and accessible across multiple devices and screen sizes.',
      'Coordinated with the development team using GitHub, managing code updates, reviews, and collaboration across the project.',
      'Gained hands-on experience in frontend and backend development, focusing on best practices for security, scalability, and maintainability.',
    ],
  },
  {
    id: 2,
    institution: 'CV Profil Indah Gypsum',
    logo: '/images/logo/cv-profil-indah-gypsum.png',
    alt: 'CV Profil Indah Gypsum Logo',
    title: 'Fullstack Developer',
    period: 'Jun 2023 — Dec 2023',
    work: 'Freelance',
    descriptionType: 'list',
    description: [
      'Developed a company profile website for CV Profil Indah Gypsum, representing 70% of the project over a 5-month period.',
      'Utilized PHP as the primary technology to build and integrate the website, ensuring smooth functionality and user experience.',
      'Designed and implemented website features to serve as the face of the company, enhancing its online presence.',
      `Collaborated with stakeholders to gather requirements and feedback, ensuring the website aligns with the company's vision and branding.`,
      `Delivered a fully operational website within the project timeline, contributing significantly to the company's digital presence.`,
    ],
  },
  {
    id: 3,
    institution: 'PT Surya Andra Jelano Jakarta',
    logo: '/images/logo/sajj.png',
    alt: 'PT Surya Andra Jelano Jakarta Logo',
    title: 'Technician',
    period: 'Jan 2023 — May 2023',
    work: 'Freelance',
    descriptionType: 'list',
    description: [
      'Managed and supervised the installation of lifts, escalators, and travelators, ensuring proper alignment and functionality.',
      'Conducted essential repairs on various vertical transportation systems, diagnosing issues and performing necessary fixes to minimize downtime.',
      'Carried out scheduled maintenance on lifts, escalators, and travelators, ensuring operational efficiency and safety compliance.',
      `Supervised daily operations and ensured strict adherence to safety protocols, minimizing risks to both equipment and personnel.`,
      `Worked closely with supervisors and the technical team to execute tasks effectively and meet project deadlines while maintaining high-quality standards.`,
    ],
  },
  {
    id: 4,
    institution: 'CV Sinergi Aneka Teknik',
    logo: '/images/logo/sat.png',
    alt: 'CV Sinergi Aneka Teknik Logo',
    title: 'Technician',
    period: 'Dec 2020 — Dec 2022',
    work: 'Freelance',
    descriptionType: 'list',
    description: [
      'Assisted with the installation of lift and escalator systems, ensuring smooth installation processes and meeting all technical specifications.',
      'Performed regular service checks and preventive maintenance on lift systems, ensuring all components functioned correctly and safely.',
      'Identified malfunctioning components, replaced faulty parts, and upgraded systems for improved performance.',
      `Supervised the operations of the installed systems, optimizing workflows to ensure the lift systems were running at peak efficiency.`,
      `Coordinated with fellow technicians and supervisors to troubleshoot problems, resolve challenges, and ensure timely completion of tasks.`,
    ],
  },
  {
    id: 5,
    institution: 'PT Prismas Jamintara',
    logo: '/images/logo/prismas.png',
    alt: 'PT Prismas Jamintara Logo',
    title: 'Technician',
    period: 'Aug 2018 — Sept 2019',
    work: 'Full-Time',
    descriptionType: 'list',
    description: [
      'Assisted in the organization and management of lift installations, ensuring that the process met the project specifications and timelines.',
      'Provided technical support for repair work on lifts, escalators, and travolators, ensuring safety and performance standards were met.',
      'Executed regular safety checks and maintenance services to keep the systems operational and prevent unexpected breakdowns.',
      `Monitored system operations, identifying potential issues and acting swiftly to prevent disruptions.`,
      `Worked in coordination with the team, ensuring tasks were executed smoothly and safety regulations were followed.`,
    ],
  },
];

export default experiences;
