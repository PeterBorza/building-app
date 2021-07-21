import React, { useContext } from "react";
import styles from "./FruitCard.module.scss";
import { Link } from "react-router-dom";
import { FruitData } from "./fruit-context";

const { fruitStyle, fruitBox } = styles;

const FruitCard = () => {
    const [fruits] = useContext(FruitData);

    // const renderFruit = (item, i) => (
    //     <div key={item.id} className={fruitBox}>
    //         <img src={item.src} alt={item.title} />
    //         <Link to={`/fruitcard/${i}`}>{item.title}</Link>
    //     </div>
    // );

    return (
        <div className={fruitStyle}>
            {fruits.map((item, i) => (
                <div key={item.id} className={fruitBox}>
                    <img src={item.src} alt={item.title} />
                    <Link to={`/fruitcard/${i}`}>{item.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default FruitCard;
