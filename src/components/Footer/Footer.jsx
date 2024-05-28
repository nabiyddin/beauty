import {
  FacebookIcon,
  InstgaramIcon,
  RingIcon,
  VkIcon,
  YouTubeIcon,
} from "../../assets/icons";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_top_wrapper}>
          <div className={styles.icons_wrapper}>
            <img src="./images/youtube.png" alt="" />
            <img src="./images/vk.png" alt="" />
            <img src="./images/facebook.png" alt="" />
            <img src="./images/instagram.png" alt="" />
          </div>
          <div className={styles.footer_texts_wrapper}>
            <p>198555, Невский пр. 140, офис 140</p>
            <p className={styles.phone_number}>8 (812) 123-45-67</p>

            <Button className={styles.button}>Обратный звонок</Button>
          </div>
        </div>
      </Container>
      <div className={styles.footer_bottom}>
        <Container>
          <div className={styles.footer_bottom_texts}>
            <p>
              Лучший магазин (с) 2019 Все права защищены. Интернет-магазин
              оборудования для салонов красоты
            </p>
            <p>Политика конфиденциальности</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
