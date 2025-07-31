import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../utils/mock";
import styles from "./Product.module.scss";
export function Product() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const current = products.find((item) => item.id === Number(id));
      setCurrentProduct(current);
    }
  }, [id]);

  if (!currentProduct) {
    return null;
  }

  return (
    <main className={styles.productPage}>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
      <h1>{currentProduct.title}</h1>
      <p>цена: {currentProduct.price}</p>
      <img src={currentProduct.image} alt="img" />
    </main>
  );
}
