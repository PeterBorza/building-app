// import { CardContext } from "../../../Context/CardContext";
// import { useContext, useState } from "react";
import styles from "./AddCard.module.scss";
import CardList from "../CardList/CardList";

const AddCard = () => {
  // const [persons, setPersons] = useContext(CardContext);
  return (
    <div className={styles.container}>
      <h1 style={{ position: "absolute", color: "red", top: "3%" }}>
        Work in Progress
      </h1>
      <CardList />
    </div>
  );
};

export default AddCard;
