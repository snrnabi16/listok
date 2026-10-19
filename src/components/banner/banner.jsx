import styles from './banner.module.css';

export default function Banner() {
  return (
    <section className={styles.wrap}>
      <div className={styles.banner}>
        <div className={styles.text}>
          <p className={styles.label}>Свежая поставка</p>
          <h2>Монстеры уже в магазине</h2>
          <p>Крупные листья, горшок с поддоном. Можно забрать сегодня на Баумана.</p>
          <button type="button">Смотреть</button>
        </div>
        <img src="/images/banner.jpg" alt="Монстера в горшке на столе" />
      </div>
    </section>
  );
}
