import { ProductCard } from "../../components/ProductCard/ProductCard";
import { products } from "../../utils/mock";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <main className={styles.homePage}>
      <h1>Главная</h1>

      <div className={styles.productsContainer}>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
