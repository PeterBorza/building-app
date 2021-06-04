import styles from "./BusinessCard.module.scss";
// import { CardContextProvider } from "./Context/CardContext";
import { useState } from "react";
import AddCard from "./AddCard/AddCard";
import Card from "./Card/Card";
import { CardContextProvider } from "../../Context/CardContext";

const BusinessCard = () => {
    const [addCard, setAddCard] = useState(false);
    const { container, addCardBtn } = styles;
    return (
        <div className={container}>
            <CardContextProvider>
                <button
                    className={addCardBtn}
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
