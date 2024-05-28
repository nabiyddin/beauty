import { FacebookIcon, InstgaramIcon, RingIcon } from "../../../assets/icons";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero_section}>
      <Container>
        <div className={styles.main_texts_wrapper}>
          <h1>Супер кресло</h1>

          <p>
            Текст акции всегда отражает суть, а не просто болтовню, поэтому
            внимательнее
          </p>

          <Button className={styles.button}>Подробнее</Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
