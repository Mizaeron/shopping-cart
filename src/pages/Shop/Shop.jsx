import styles from "./Shop.module.css";

const products = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Dumbbells" },
  { id: 3, name: "Shoes" },
  { id: 4, name: "Bottle" },
  { id: 5, name: "Bag" },
];

function Shop() {
  return (
    <div className={styles.shop}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Shop;
