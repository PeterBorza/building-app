import styles from "./FruitCard.module.scss";
import { Link } from "react-router-dom";
import apple from "../../images/apple.jpg";
import orange from "../../images/orange.jpg";
import lemon from "../../images/lemon.jpg";
import apricot from "../../images/apricots.jpg";
import pear from "../../images/pear.jpg";
import mango from "../../images/mango.jpg";
import bananas from "../../images/bananas.jpg";
import grapes from "../../images/grapes.jpg";

const fruits = [apple, orange, lemon, apricot, pear, mango, bananas, grapes];

const data = [
    {
        id: 1,
        title: "apple",
        // source: apple,
    },
    {
        id: 2,
        title: "orange",
        // source: orange,
    },
    {
        id: 3,
        title: "lemon",
        // source: lemon,
    },
    {
        id: 4,
        title: "apricot",
        // source: apricot,
    },
    {
        id: 5,
        title: "pear",
        // source: pear,
    },
    {
        id: 6,
        title: "mango",
        // source: mango,
    },
    {
        id: 7,
        title: "bananas",
        // source: bananas,
    },
    {
        id: 8,
        title: "grapes",
        // source: grapes,
    },
];

const FruitCard = () => {
    const { fruitStyle, fruitBox } = styles;

    const renderFruit = (item, i) => (
        <div key={item.id} className={fruitBox}>
            <img src={fruits[i]} alt={item.id} />
            <Link to={`/fruitcard/${i}`}>{item.title}</Link>
        </div>
    );
    const renderFruits = data.map(renderFruit);
    return <div className={fruitStyle}>{renderFruits}</div>;
};

export default FruitCard;
