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
      Работал в качастве frontend разработчика над проектами «Каталог данных» в команде из 15 человек. 
      Выполнял широкий спектр задач, включая разработку новых компонентов, модулей и безнес-процессов.
      Принимал участие в годовом и квартальном планировании задач. 
      Был привлечен в качестве ведущего frontend разработчика для работы над проктом «Качество данных», отвечал за архитектуру и принимал участие в проектировании интеграций.
    `,
    keyResults: [
      'Провел полный рефакторинг архитектуры frontend-приложения «Каталог данных», приведя технологический стек в соответствие с современными стандартами.',
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
    position: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Фриланс-разработка веб-приложений и интеграция с REST API.',
    keyResults: [],
    technologies: ['React', 'JavaScript', 'SCSS', 'REST API'],
  },
  {
    id: 3,
    company: 'Startup Inc',
    position: 'Junior Frontend Developer',
    period: '2018 - 2019',
    description:
      'Разработка пользовательских интерфейсов, работа с API, участие в code review.',
    keyResults: [],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
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
