
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const contacts = [
    { label: 'Email', value: 'don.misha.rachinskii@ya.ru', href: 'mailto:don.misha.rachinskii@ya.ru' },
    { label: 'Phone', value: '+7 (999) 480-20-22', href: 'tel:+79994802022' },
    { label: 'GitHub', value: 'donrachinskii-design', href: 'https://github.com/donrachinskii-design' },
  ];

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'GraphQL',
    'Redux',
    'CSS/SCSS',
    'Webpack',
    'Vite',
    'Git',
    'Docker',
    'SQL',
  ];

  const strengths = [
    'Обширный опыт разработки frontend-приложений позволяет предлагать оптимальные решения даже при неполной постановке задачи',
    'Опыт в смежных областях: дизайн веб-проектов, работа с векторной графикой и анимацией',
    'Создаю дружественную атмосферу в команде, ориентируюсь на решение проблем, а не поиск виноватых',
    'Активно делюсь знаниями и опытом с коллегами, помогаю их профессиональному развитию',
    'Оптимизирую производительность с использованием современных инструментов и методик',
    'Опыт оценки и реализации сложных задач на всех этапах: от анализа до внедрения решения',
  ];

  const education = [
    {
      id: 1,
      institution: 'Южный Федеральный Университет',
      degree: 'Бакалавр',
      field: 'Информационная безопасность',
      year: '2020',
    }
  ];

  const renderContactValue = (contact) => {
    if (contact.href) {
      return (
        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="contact-link">
          {contact.value}
        </a>
      );
    }
    return <span className="contact-value">{contact.value}</span>;
  };

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-title">Контакты</h3>
        <div className="contacts-list">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-info">
                <span className="contact-label">{contact.label}</span>
                {renderContactValue(contact)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sidebar-section">
        <h3 className="sidebar-title">Сильные стороны</h3>
        <div className="strengths-list">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-item">
              {strength}
            </div>
          ))}
        </div>
      </section>

      <section className="sidebar-section">
        <h3 className="sidebar-title">Ключевые компетенции</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="sidebar-section">
        <h3 className="sidebar-title">Образование</h3>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-field">{edu.field}</p>
              <span className="education-year">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
