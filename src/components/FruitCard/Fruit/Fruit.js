import { useParams, Link } from "react-router-dom";
import styles from "./Fruit.module.scss";
import apple from "../../../images/apple.jpg";
import orange from "../../../images/orange.jpg";
import lemon from "../../../images/lemon.jpg";
import apricot from "../../../images/apricots.jpg";
import pear from "../../../images/pear.jpg";
import mango from "../../../images/mango.jpg";
import bananas from "../../../images/bananas.jpg";
import grapes from "../../../images/grapes.jpg";

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

const Fruit = () => {
    const { id } = useParams();
    return (
        <div className={styles.fruitBox}>
            <img src={fruits[id]} alt="fruit" />
            <p>{data[id].title}</p>
            <Link to="/fruitcard">Go back...</Link>
        </div>
    );
};

export default Fruit;
