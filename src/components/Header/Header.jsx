import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_item}>
          <li>
            <a href="">Доставка</a>
          </li>
          <li>
            <a href="">Оплата</a>
          </li>
          <li>
            <a href="">Отзывы</a>
          </li>
          <li>
            <a href="">Вопрос - ответ</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>
      </nav>

      <Container>
        <div className={styles.navbar_middle_wrapper}>
          <nav className={styles.navbar_middle}>
            <div className={styles.logo_wrapper}>
              <a href="/">
                <img src="./images/logo.png" alt="logo" />
              </a>
              <p>beauty</p>
            </div>
          </nav>
          <div className={styles.navbar_middle_end}>
            <p>8 (812) 123-45-67</p>
            <Button className={styles.button}>Обратный звонок</Button>
          </div>
        </div>
      </Container>

      <nav className={styles.navbar_bottom}>
        <ul>
          <li>
            <a href="">Парикмахерская</a>
          </li>
          <li>
            <a href="">Барбершоп</a>
          </li>
          <li>
            <a href="">Маникюр</a>
          </li>
          <li>
            <a href="">Педикюр</a>
          </li>
          <li>
            <a href="">Массаж</a>
          </li>
          <li>
            <a href="">Мебель</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
