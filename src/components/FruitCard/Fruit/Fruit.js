import { useParams, Link } from "react-router-dom";
import { Fruits, FruitData } from "../fruit-context";
import styles from "./Fruit.module.scss";

const Fruit = () => {
    const { id } = useParams();
    const fruits = Fruits();
    const data = FruitData();
    return (
        <div className={styles.fruitBox}>
            <img src={fruits[id]} alt="fruit" />
            <p>{data[id]}</p>
            <Link to="/fruitcard">Go back...</Link>
        </div>
    );
};

export default Fruit;
