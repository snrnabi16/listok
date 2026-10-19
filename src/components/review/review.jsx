import styles from './review.module.css';

export default function Review() {
  return (
    <section className={styles.wrap}>
      <blockquote className={styles.card}>
        <p>«Забрала монстеру в тот же день. Листья целые, горшок уже с поддоном.»</p>
        <footer>Марина, Казань</footer>
      </blockquote>
    </section>
  );
}
