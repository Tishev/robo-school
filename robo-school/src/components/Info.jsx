import '../scss/info.scss';
import info from '../assets/images/info/i.svg';

import { useState } from 'react';
import Courusel from './Courusel';
function Info() {
  const [hidden, setHidden] = useState(false);
  const [contentOption, setContentOption] = useState(true);
  const [contentOption2, setContentOption2] = useState(true);
  const [contentOption3, setContentOption3] = useState(true);

  const onMouseEnterHandlerMore = () => {
    setTimeout(() => {
      setHidden(true);
    }, 250);
  };

  const onMouseLeaveHandlerMore = () => {
    setTimeout(() => {
      setHidden(false);
    }, 250);
  };

  const onMouseEnterHandlerBlack = () => {
    setTimeout(() => {
      setContentOption(false);
    }, 300);
  };

  const onMouseLeaveHandlerBlack = () => {
    setTimeout(() => {
      setContentOption(true);
    }, 300);
  };

  const onMouseEnterHandlerBlack2 = () => {
    setTimeout(() => {
      setContentOption2(false);
    }, 300);
  };

  const onMouseLeaveHandlerBlack2 = () => {
    setTimeout(() => {
      setContentOption2(true);
    }, 300);
  };
  const onMouseEnterHandlerBlack3 = () => {
    setTimeout(() => {
      setContentOption3(false);
    }, 300);
  };

  const onMouseLeaveHandlerBlack3 = () => {
    setTimeout(() => {
      setContentOption3(true);
    }, 300);
  };

  return (
    <div className="info">
      <div className="container">
        <div className="info-content">
          <p className="info-content__text">
            <b>Robo School</b> – учреждение для формирования кадрового педагогического резерва в
            сфере робототехники и программирования
          </p>
          <div className="info-content__items">
            <div className="info-content__item">
              <h1 className="content-item__title">10</h1>
              <p className="content-item__text">
                УМК по различным <br />
                направлениям по робототехнике
              </p>
            </div>
            <div className="info-content__item">
              <h1 className="content-item__title">20</h1>
              <p className="content-item__text">Школ, в которых запущена робототехника</p>
            </div>
            <div className="info-content__item">
              <h1 className="content-item__title">100</h1>
              <p className="content-item__text">Педагогов прошедших курсы повышения квалификации</p>
            </div>
            <div className="info-content__item">
              <h1 className="content-item__title">10 000</h1>
              <p className="content-item__text">Обученных детей на базе собственных центров</p>
            </div>
          </div>
          <div className="info-content__documents">
            <h2 className="info-content__title">Что вы получите после курса</h2>
            <div className="info-content__boxes">
              <div className="info-content__box">
                <h2 className="content-box__title">Удостоверение</h2>
                <p className="content-box__text">
                  Дающее право преподавать робототехнику для детей 6-12 лет в образовательных
                  учреждениях
                </p>
              </div>
              <div className="info-content__box">
                <h2 className="content-box__title">Знания</h2>
                <p className="content-box__text">
                  По основам разработки учебно-методических комплексов по робототехнике и
                  программированию
                </p>
              </div>
              <div className="info-content__box">
                {hidden && <div className="content-box__more ">При наличии свободных мест</div>}
                <img
                  onMouseEnter={onMouseEnterHandlerMore}
                  onMouseLeave={onMouseLeaveHandlerMore}
                  className="content-img"
                  src={info}
                  alt="info"
                />
                <h2 className="content-box__title">Практику</h2>
                <p className="content-box__text">
                  Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в
                  оффлайн или онлайн формате)
                </p>
              </div>
            </div>
          </div>
          <Courusel />
          <div className="info-content__option">
            <h1 className="content-shoose__title">Выберите нужный пакет</h1>
            <div className="content-shoose__items">
              {contentOption ? (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack}
                  onMouseLeave={onMouseLeaveHandlerBlack}
                  className="content-shoose__item"
                >
                  <h1 className="shoose-item__title">– PRO –</h1>
                  <h1 className="shoose-item__price">20.000 ₽</h1>
                  <p className="shoose-item__position">УМК по робототетхнике и программированию</p>
                  <button className="shoose-item__application">Оставить заявку</button>
                </div>
              ) : (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack}
                  onMouseLeave={onMouseLeaveHandlerBlack}
                  className="content-shoose__item-black "
                >
                  <h1 className="shoose-item__title-black">– PRO –</h1>
                  <h1 className="shoose-item__price-black">20.000 ₽</h1>
                  <p className="shoose-item__position-black">
                    УМК по робототетхнике и программированию
                  </p>
                  <button className="shoose-item__application-black">Оставить заявку</button>
                </div>
              )}

              {contentOption2 ? (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack2}
                  onMouseLeave={onMouseLeaveHandlerBlack2}
                  className="content-shoose__item"
                >
                  <h1 className="shoose-item__title">– ROBO –</h1>
                  <h1 className="shoose-item__price">15.000 ₽</h1>
                  <p className="shoose-item__position">УМК по робототетхнике</p>
                  <button className="shoose-item__application">Оставить заявку</button>
                </div>
              ) : (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack2}
                  onMouseLeave={onMouseLeaveHandlerBlack2}
                  className="content-shoose__item-black "
                >
                  <h1 className="shoose-item__title-black">– ROBO –</h1>
                  <h1 className="shoose-item__price-black">15.000 ₽</h1>
                  <p className="shoose-item__position-black">УМК по робототетхнике</p>
                  <button className="shoose-item__application-black">Оставить заявку</button>
                </div>
              )}
              {contentOption3 ? (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack3}
                  onMouseLeave={onMouseLeaveHandlerBlack3}
                  className="content-shoose__item"
                >
                  <h1 className="shoose-item__title">– PROG –</h1>
                  <h1 className="shoose-item__price">10.000 ₽</h1>
                  <p className="shoose-item__position">УМК по программированию</p>
                  <button className="shoose-item__application">Оставить заявку</button>
                </div>
              ) : (
                <div
                  onMouseEnter={onMouseEnterHandlerBlack3}
                  onMouseLeave={onMouseLeaveHandlerBlack3}
                  className="content-shoose__item-black "
                >
                  <h1 className="shoose-item__title-black">– PROG –</h1>
                  <h1 className="shoose-item__price-black">10.000 ₽</h1>
                  <p className="shoose-item__position-black">УМК по программированию</p>
                  <button className="shoose-item__application-black">Оставить заявку</button>
                </div>
              )}

              {/* <div className="content-shoose__item">
                <h1 className="shoose-item__title">– ROBO –</h1>
                <h1 className="shoose-item__price">15.000 ₽</h1>
                <p className="shoose-item__position">УМК по робототетхнике </p>
                <button className="shoose-item__application">Оставить заявку</button>
              </div>
              <div className="content-shoose__item">
                <h1 className="shoose-item__title">– PROG –</h1>
                <h1 className="shoose-item__price">10.000 ₽</h1>
                <p className="shoose-item__position">УМК по программированию</p>
                <button className="shoose-item__application">Оставить заявку</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
