interface EducationItem {
  id?: number;
  institution?: string;
  logo?: string;
  alt?: string;
  title?: string;
  period?: string;
  study?: string;
  descriptionType?: 'paragraph' | 'list';
  description?: string | string[];
  detail?: string;
}

const educations: EducationItem[] = [
  {
    id: 1,
    institution: 'Universitas Pembangunan Jaya',
    logo: '/images/logo/upj.png',
    alt: 'UPJ Logo',
    title: 'Informatics',
    period: 'Sept 2019 — Sept 2025',
    study: 'Bachelor Degree S1',
    descriptionType: 'list',
    description: [
      'Learn and Train about Artificial Intelligence.',
      'Created an IoT project, namely a Spider Robot with a controller.',
      'Created an IoT project, namely a Spider Robot with a controller.Created an IoT project, namely a Spider Robot with a controller.',
      'Represented the university in regional programming challenges, focusing on problem-solving and algorithm development.',
    ],
  },
  {
    id: 2,
    institution: 'Eduwork',
    logo: '/images/logo/eduwork.png',
    alt: 'Eduwork Logo',
    title: 'Laravel — Vue JS',
    period: 'May 2023 — Feb 2023',
    study: 'Bootcamp',
    descriptionType: 'list',
    description: [
      'Mastered web development fundamentals, including HTML, CSS, and JavaScript (3 weeks).',
      'Developed and integrated databases using PHP, MySQL, and MongoDB (4 weeks).',
      'Installed and utilized Laravel and Spatie for advanced website development (5 weeks).',
      'Learned Vue.js to create dynamic user interfaces (7 weeks).',
    ],
  },
  {
    id: 3,
    institution: 'Dicoding Academy',
    logo: '/images/logo/dicoding.png',
    alt: 'Dicoding Logo',
    title: 'Laravel — Vue JS',
    period: 'Feb 2022 — Jun 2023',
    study: 'Bootcamp',
    descriptionType: 'list',
    description: [
      'Starting the Fundamentals of Programming to Become a Software Developer (23 Hours).',
      'Learning the Basics of UX Design (23 Hours).',
      'Learning SOLID Programming Principles (15 Hours).',
      'Getting Started with Programming in Dart (20 Hours).',
      'Learning to Build Flutter Applications for Beginners (40 Hours).',
    ],
  },
];

export default educations;
