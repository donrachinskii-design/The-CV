import React from 'react';
import './WorkExperience.css';

function WorkExperience({ company, position, period, description, keyResults, technologies }) {
  return (
    <article className="work-experience">
      <div className="work-header">
        <div className="work-main-info">
          <h3 className="work-position">{position}</h3>
          <h4 className="work-company">{company}</h4>
        </div>
        <span className="work-period">{period}</span>
      </div>
      {description && <p className="work-description">{description}</p>}
      {keyResults && keyResults.length > 0 && (
        <>
          <h5 className="work-key-results-title">Ключевые результаты</h5>
          <ul className="work-description-list">
            {keyResults.map((result, index) => (
              <li key={index} className="work-description-item">{result}</li>
            ))}
          </ul>
        </>
      )}
      {technologies && technologies.length > 0 && (
        <>
          <h5 className="work-technologies-title">Технологии</h5>
          <div className="work-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

export default WorkExperience;
