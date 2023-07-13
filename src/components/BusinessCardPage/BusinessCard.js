import { useState } from "react";

import { CardContextProvider } from "Context";
import AddCard from "./AddCard";
import Card from "./Card";

import styles from "./BusinessCard.module.scss";

const BusinessCard = () => {
  const [addCard, setAddCard] = useState(false);

  return (
    <div className={styles.container}>
      <CardContextProvider>
        <button
          className={styles.addCardBtn}
          onClick={() => setAddCard(!addCard)}
        >
          {addCard ? "See Cards" : "Add Card"}
        </button>
        {addCard ? <AddCard /> : <Card />}
      </CardContextProvider>
    </div>
  );
};

export default BusinessCard;
