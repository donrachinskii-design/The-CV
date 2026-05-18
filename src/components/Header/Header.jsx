import React from 'react';
import Stats from '../Stats';
import './Header.css';

function Header() {
  const stats = [
    { number: '6', label: 'лет опыта' },
    { number: '5', label: 'проектов для крупного бизнеса' },
    { number: '100%', label: 'KPI за последние 3 года работы' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1 className="header-name">Михаил Рачинский</h1>
          <p className="header-title">Senior Frontend Developer</p>
        </div>
        <Stats items={stats} />
        <p className="header-description">
          Frontend-разработчик с опытом проектирования архитектуры и создания
          UI-библиотек.
          <br />
          Привожу технологический стек к современным стандартам, пишу
          качественный и поддерживаемый код.
          <br />
          Развиваюсь сам и помогаю расти команде.
        </p>
      </div>
    </header>
  );
}

export default Header;
