import { EnvelopeIcon, TruckIcon } from "../../../assets/icons";
import Button from "../../../components/Button/Button";
import OfferCard from "../../../components/Cards/OfferCard/OfferCard";
import Container from "../../../components/Container/Container";
import { collectionData } from "../../../components/contents";
import styles from "./Offer.module.scss";

function Offer() {
  return (
    <section className={styles.offer_section}>
      <Container>
        <div className={styles.main_text_wrapper}>
          <h2>Специальные предложения</h2>
          <TruckIcon />
        </div>

        <div className={styles.cards}>
          {collectionData.map((item) => (
            <OfferCard key={item.id} data={item} />
          ))}
        </div>

        <div className={styles.offer_cards_wrapper}>
          <div className={styles.left_card}>
            <div>
              <h4>Получайте бонусы и подарки</h4>
              <p>
                Каждый месяц разыгрываем <br /> 10 000 рублей для наших клиентов
              </p>
              <input type="text" placeholder="Введите e-mail" />
            </div>
            <EnvelopeIcon />
          </div>

          <div className={styles.right_card}>
            <h4>Заходите к нам</h4>
            <p>
              Более 300 магазинов <br /> по всей России
            </p>
            <Button className={styles.button}>Карта магазинов</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Offer;
