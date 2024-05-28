import Button from "../../Button/Button";
import styles from "./OfferCard.module.scss";

function OfferCard({ data }) {
  return (
    <div className={styles["main-texts-wrapper"]}>
      <img className={styles.image} src={data.imgs} alt="image" />
      <p className={styles.card_title}>
        Парикмахерское кресло «Норм» гидравлическое
      </p>
      <p className={styles.card_price}>9 900 ₽ </p>
      <Button className={styles.button}>Купить</Button>
    </div>
  );
}

export default OfferCard;
