import React from 'react';
import WorkExperience from '../WorkExperience';
import './Content.css';

const experiences = [
  {
    id: 1,
    company: 'Сибур Диджитал',
    position: 'Senior Frontend Developer',
    period: 'февраль 2023 - декабрь 2025',
    description: `
      Работал в качастве frontend разработчика над проектом «Каталог данных» в команде из 15 человек. 
      Выполнял широкий спектр задач, включая разработку новых компонентов и модулей, а также исправление багов.
      Принимал участие в годовом и квартальном планировании задач. 
      Был привлечен в качестве ведущего frontend разработчика для работы над проктом «Качество данных», отвечал за архитектуру и принимал участие в проектировании интеграций.
    `,
    keyResults: [
      'Провел полный рефакторинг архитектуры приложения «Каталог данных», приведя технологический стек в соответствие с современными стандартами.',
      'Создал библиотеку UI-компонентов в соответствии со style guide компании.',
      'Разработал frontend-приложение «Качество данных» с нуля.',
      'Оптимизировал производительность приложения на больших объемах данных.',
      'Оптимизировал процесс сборки приложения сократив время развертывания.',
      'Настроил инфраструктуру CI/CD для автоматизации сборки и развертывания приложения.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'GraphQL',
      'Apollo Client',
      'Webpack',
      'Vite',
      'Material-UI',
      'Storybook',
      'Ansible',
    ],
  },
  {
    id: 2,
    company: 'Self-employeed',
    position: 'Fullstack Developer',
    period: 'май 2022 - ноябрь 2022',
    description: `
      Участвовал в создании стартап-проекта, ориентированного на рыночный запуск и привлечение инвестиций. 
      Отвечал за разработку интерфейста, находясь в постоянном контакте с product-owner и дизайнерами.
      Принимал участие в разработке React Native приложения и back-end части.
    `,
    keyResults: [
      'Реализовал ключевые функции приложения: календарь, кабинет создателя контента и пользователя.',
      'Реализовал адаптивный интерфейc, обеспечивающий корректную работу на всех устройствах.',
    ],
    technologies: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Redux',
      'Node.js',
      'Nest',
      'GraphQL',
      'TanStack Query',
      'Webpack',
      'Material-UI',
    ],
  },
  {
    id: 3,
    company: 'EPAM Systems',
    position: 'Lead Frontend Developer',
    period: 'январь 2022 - апрель 2022',
    description: `
      Работал в качестве лидера команды frontend разработчиков для маркетплейса «ManoMano».
      Отвечал как за разработку задач, так и за формирование команды и распределение нагрузки между разработчиками.
    `,
    keyResults: [
      'Совместно с техническим директором заказчика провел интервью и сформировал команду из 4 разработчиков.',
      'Реализовал задачи различной сложности с полным покрытием unit-тестами.',
      'Провел code review и наставничество для членов команды.',
    ],
    technologies: ['React', 'TypeScript', 'Axios', 'Gherkin', 'Cucumber'],
  },
  {
    id: 4,
    company: 'Dunice LLC',
    position: 'Middle Fullstack Engineer',
    period: 'август 2019 - декабрь 2021',
    description: (
      <span>
        Начал карьеру со стажировки, которая переросла в должность junior
        fullstack разработчика. Работал более чем на 10 проектах в качестве
        outstaff-сотрудника, включая длительную разработку платформ{' '}
        <a
          href="https://salonultimate.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          salonultimate.com
        </a>
        {' '}
        и
        {' '}
        <a
          href="https://fieldcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fieldcode.com
        </a>
        . Активно развивался через обучение и менторство коллег, что привело к
        повышению до middle fullstack разработчика.
      </span>
    ),
    keyResults: [
      'Разработал и поддерживал функциональность для двух крупных платформ, обслуживающих тысячи пользователей.',
      'Прошел путь от junior до middle разработчика благодаря постоянному совершенствованию навыков.',
      'Оказывал техническое наставничество менее опытным членам команды.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Material-UI',
      'Redux',
      'Jest',
      'Axios',
      'Node.js',
      'Express',
    ],
  },
];

function Content() {
  return (
    <main className="content">
      <section className="experience-section">
        <h2 className="section-title">Опыт работы</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <WorkExperience key={exp.id} {...exp} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Content;
