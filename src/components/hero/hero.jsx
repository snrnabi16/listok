import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Растения для дома</h1>
      <p>Небольшой магазин комнатных растений. Выберите горшок и заберите его сегодня.</p>
      <button type="button">В каталог</button>
    </section>
  );
}
