import styles from "./FruitCard.module.scss";
import { Link } from "react-router-dom";
import { Fruits, FruitData } from "./fruit-context";

const FruitCard = () => {
    const { fruitStyle, fruitBox } = styles;
    const fruits = Fruits();
    const data = FruitData();

    const renderFruit = (item, i) => (
        <div key={i} className={fruitBox}>
            <img src={fruits[i]} alt={item} />
            <Link to={`/fruitcard/${i}`}>{item}</Link>
        </div>
    );
    const renderFruits = data.map(renderFruit);
    return <div className={fruitStyle}>{renderFruits}</div>;
};

export default FruitCard;
