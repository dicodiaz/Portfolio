import { IconType } from 'react-icons';
import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';

export type SkillType = {
  id: number;
  Bullet: IconType;
  title: string;
  names: string[];
};

const skills: SkillType[] = [
  {
    id: 1,
    Bullet: BsDiamondFill,
    title: 'Front-end',
    names: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'MobX',
      'GraphQL',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'Jest',
      'React Testing Library',
      'Enzyme',
      'Cypress',
      'Vitest',
    ],
  },
  {
    id: 2,
    Bullet: BsSquareFill,
    title: 'Back-end',
    names: ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'RSpec', 'Capybara', 'Selenium', 'REST APIs'],
  },
  {
    id: 3,
    Bullet: BsCircleFill,
    title: 'Tools & Methods',
    names: [
      'VSCode',
      'Git',
      'Gitflow',
      'GitHub',
      'Netlify',
      'Render',
      'Design Patterns',
      'Responsive Design',
      'TDD',
      'Debugging',
    ],
  },
];

export default skills;
