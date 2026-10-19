import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home">
        Листок
      </a>
      <nav className={styles.nav}>
        <a href="#home">Главная</a>
        <a href="#catalog">Каталог</a>
        <a href="#cart">Корзина</a>
        <button type="button">Войти</button>
      </nav>
    </header>
  );
}
