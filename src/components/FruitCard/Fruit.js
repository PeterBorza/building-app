import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { FruitData } from "./fruit-context";

import styles from "./Fruit.module.scss";

export const Fruit = () => {
  const { id } = useParams();
  const [fruits] = useContext(FruitData);

  return (
    <div className={styles.fruitBox}>
      <img src={fruits[id].src} alt="fruit" />
      <p>{fruits[id].title}</p>
      <Link to="/fruitcard">Go back...</Link>
    </div>
  );
};
