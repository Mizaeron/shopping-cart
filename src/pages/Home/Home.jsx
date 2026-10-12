import styles from "./Home.module.css";
import coffee from "../../assets/coffee.webp";
import dumbells from "../../assets/dumbells.jpg";

function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.image} src={coffee} alt="coffee" />
      <img className={styles.image} src={dumbells} alt="dumbells" />
    </div>
  );
}

export default Home;
