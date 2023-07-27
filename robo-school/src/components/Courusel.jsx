import irina from '../assets/images/items/1.jpg';
import marina from '../assets/images/items/2.jpg';
import maxim from '../assets/images/items/3.jpg';
import konstantin from '../assets/images/items/4.jpg';
import liza from '../assets/images/items/5.jpg';

const Courusel = () => {
  return (
    <div className="info-content__coachs">
      <h2 className="content-coachs__title">Профессиональные тренеры</h2>
      <div className="content-coachs__items">
        <div className="content-coach__item">
          <img src={irina} alt="irina" />
          <h3 className="coach-name">Ирина Лайм</h3>
          <p className="coach-position">преподаватель по робототехнике</p>
          <p className="coach-more">Подробнее</p>
        </div>
        <div className="content-coach__item">
          <img src={marina} alt="marina" />
          <h3 className="coach-name">Марина Орлова</h3>
          <p className="coach-position">преподаватель по робототехнике</p>
          <p className="coach-more">Подробнее</p>
        </div>
        <div className="content-coach__item">
          <img src={maxim} alt="maxim" />
          <h3 className="coach-name">Максим Петров</h3>
          <p className="coach-position">преподаватель по программированию</p>
          <p className="coach-more">Подробнее</p>
        </div>
        <div className="content-coach__item">
          <img src={konstantin} alt="konstantin" />
          <h3 className="coach-name">Константин Назаров</h3>
          <p className="coach-position">преподаватель по робототехнике</p>
          <p className="coach-more">Подробнее</p>
        </div>
        {/* <div className="content-coach__item">
                <img src={liza} alt="liza" />
                <h3 className="coach-name">Лиза Весенняя</h3>
                <p className="coach-position">преподаватель по программированию</p>
                <p className="coach-more">Подробнее</p>
              </div> */}
      </div>
    </div>
  );
};

export default Courusel;
