import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FruitData } from "./fruit-context";
import styles from "./Fruit.module.scss";

export const Fruit = () => {
    const { id } = useParams();
    const [fruits] = useContext(FruitData);
    const fruitSrc = fruits.map(item => item.src);
    const fruitTitle = fruits.map(item => item.title);

    return (
        <div className={styles.fruitBox}>
            <img src={fruitSrc[id]} alt="fruit" />
            <p>{fruitTitle[id]}</p>
            <Link to="/fruitcard">Go back...</Link>
        </div>
    );
};
