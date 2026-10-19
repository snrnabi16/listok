import styles from './product-card.module.css';

export default function ProductCard({ title, price }) {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src="/images/monstera.jpg" alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button type="button">В корзину</button>
    </article>
  );
}
