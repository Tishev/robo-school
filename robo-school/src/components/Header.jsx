import '../scss/header.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">ROBO.SCHOOL</h1>
      <div className="header-menu">
        <ul className="header-menu__items">
          <li className="header-menu__item">О школе</li>
          <li className="header-menu__item">Тренеры</li>
          <li className="header-menu__item">Стоимость</li>
        </ul>
      </div>
      <h2 className="header-phone">+7 800 000 11 22</h2>
    </div>
  );
}

export default Header;
