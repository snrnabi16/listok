import styles from './places.module.css';

const places = [
  { title: 'Гостиная', note: 'Крупные листья', image: '/images/living.jpg' },
  { title: 'Кухня', note: 'Травы и зелень', image: '/images/kitchen.jpg' },
  { title: 'Спальня', note: 'Тихие растения', image: '/images/bedroom.jpg' },
  { title: 'Балкон', note: 'Стойкие виды', image: '/images/balcony.jpg' },
];

export default function Places() {
  return (
    <section className={styles.section}>
      <h2>Куда поставить</h2>
      <div className={styles.grid}>
        {places.map((place) => (
          <article key={place.title} className={styles.card}>
            <img className={styles.swatch} src={place.image} alt={place.title} />
            <h3>{place.title}</h3>
            <p>{place.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
