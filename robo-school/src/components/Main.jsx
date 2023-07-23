import '../scss/main.scss';
import Lady from '../assets/images/main/Lady.png';
function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main-block">
          <div className="main-info">
            <h1 className="main-info__title">ROBO SCHOOL</h1>
            <p className="main-info__text">
              Курсы повышения квалификации по робототехнике для педагогов начальной школы
            </p>
            <button className="main-info__btn">Записаться на курс</button>
          </div>
          <img className="main-img" src={Lady} alt="Lady" />
        </div>
      </div>
    </div>
  );
}

export default Main;
