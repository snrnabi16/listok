import styles from './footer.module.css';

const columns = [
  {
    title: 'Листок',
    lines: ['Магазин комнатных растений', 'Казань, ул. Баумана, 12'],
  },
  {
    title: 'Покупателям',
    lines: ['Доставка по городу', 'Как ухаживать', 'Возврат 7 дней'],
  },
  {
    title: 'Контакты',
    lines: ['hello@listok.shop', 'Ежедневно 10:00–20:00'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {columns.map((column) => (
        <div key={column.title}>
          <h2>{column.title}</h2>
          {column.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
    </footer>
  );
}
