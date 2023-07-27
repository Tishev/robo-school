import '../scss/footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-block__text">
            <h1 className="footer-block__title">
              Запишитесь на курс <br /> со скидкой 10%
            </h1>
            <p className="footer-block__text">Акция действительна до 10 марта 2022 года</p>
          </div>

          <div className="footer-block__inputs">
            <input placeholder="Имя" type="text" className="footer-block__input" />
            <input placeholder="Телефон" type="text" className="footer-block__input" />
            <input placeholder="E-mail" type="text" className="footer-block__input" />
            <button className="footer-block__btn">Оформить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
