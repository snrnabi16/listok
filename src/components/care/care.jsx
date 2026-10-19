import styles from './care.module.css';

const tips = [
  {
    title: 'Свет',
    text: 'Большинству хватает окна. Прямое солнце нужно не всем.',
  },
  {
    title: 'Вода',
    text: 'Поливайте, когда земля сверху уже сухая. Лучше реже, чем чаще.',
  },
  {
    title: 'Горшок',
    text: 'Берите с отверстием на дне. Поддон оставьте, воду из него сливайте.',
  },
];

export default function Care() {
  return (
    <section className={styles.section}>
      <h2>Простой уход</h2>
      <div className={styles.grid}>
        {tips.map((tip) => (
          <article key={tip.title} className={styles.card}>
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
