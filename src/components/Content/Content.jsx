import React from 'react';
import WorkExperience from '../WorkExperience';
import Sidebar from '../Sidebar';
import './Content.css';

const experiences = [
  {
    id: 1,
    company: 'Сибур Диджитал',
    position: 'Senior Frontend Developer',
    period: 'февраль 2023 - декабрь 2025',
    description: `
      Разрабатывал frontend-часть проекта «Каталог данных» в команде из 15 человек, реализуя новые компоненты, модули и устраняя критические баги.
      Активно участвовал в стратегическом планировании на уровне года и квартала.
      Назначен ведущим frontend-разработчиком проекта «Качество данных», где определял архитектурные решения и проектировал интеграции с внешними системами.
      Проводил техническое собеседование и отбор кандидатов на должность frontend-разработчиков в период расширения команды.
    `,
    keyResults: [
      'Провел комплексный рефакторинг архитектуры приложения «Каталог данных», актуализировав технологический стек в соответствии с современными стандартами.',
      'Разработал масштабируемую библиотеку UI-компонентов, полностью соответствующую корпоративному style guide.',
      'Создал с нуля frontend-приложение «Качество данных» с оптимальной архитектурой.',
      'Оптимизировал производительность приложения при работе с большими объемами данных.',
      'Сократил время развертывания приложения путем оптимизации процесса сборки.',
      'Внедрил инфраструктуру CI/CD для полной автоматизации сборки и развертывания.',
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
    company: 'Self-employed',
    position: 'Fullstack Developer',
    period: 'май 2022 - ноябрь 2022',
    description: `
      Участвовал в создании стартап-проекта, ориентированного на рыночный запуск и привлечение инвестиций.
      Отвечал за разработку интерфейса, находясь в постоянном контакте с product owner и дизайнерами.
      Принимал участие в разработке React Native приложения и backend-части.
    `,
    keyResults: [
      'Реализовал ключевые функции приложения: календарь, кабинет создателя контента и пользователя.',
      'Реализовал адаптивный интерфейс, обеспечивающий корректную работу на всех устройствах.',
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
      Работал в качестве лидера команды frontend-разработчиков для маркетплейса «ManoMano».
      Отвечал как за разработку задач, так и за формирование команды и распределение нагрузки между разработчиками.
    `,
    keyResults: [
      'Совместно с техническим директором заказчика провел интервью и сформировал команду из 4 разработчиков.',
      'Реализовал задачи различной сложности с полным покрытием unit-тестами.',
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
        fullstack-разработчика. Работал более чем на 10 проектах в качестве
        outstaff-сотрудника, включая длительную разработку платформ{' '}
        <a
          href="https://salonultimate.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          salonultimate.com
        </a>{' '}
        и{' '}
        <a
          href="https://fieldcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fieldcode.com
        </a>
        . Активно развивался через обучение и менторство коллег, что привело к
        повышению до middle fullstack-разработчика.
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
      <div className="content-wrapper">
        <Sidebar />
        <section className="main-content">
          <section className="experience-section">
            <h2 className="section-title">Опыт работы</h2>
            <div className="experience-list">
              {experiences.map((exp) => (
                <WorkExperience key={exp.id} {...exp} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Content;
