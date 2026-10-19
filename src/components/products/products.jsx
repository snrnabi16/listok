import ProductCard from '../product-card/product-card.jsx';
import styles from './products.module.css';

const plant = {
  title: 'Монстера',
  price: '1 490 ₽',
};

export default function Products() {
  return (
    <section className={styles.section}>
      <h2>Популярное</h2>
      <div className={styles.grid}>
        <ProductCard title={plant.title} price={plant.price} />
        <ProductCard title={plant.title} price={plant.price} />
        <ProductCard title={plant.title} price={plant.price} />
      </div>
    </section>
  );
}
