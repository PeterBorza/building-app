import { useContext } from "react";
import styles from "./Card.module.scss";
import { CardContext } from "Context";
import CardDetails from "../CardDetails";
import { shuffle } from "../../utils/shuffle";

const Card = () => {
  const { businessCard, imgStyle } = styles;
  const [persons] = useContext(CardContext);
  const shuffledPersons = shuffle(persons);

  return (
    <>
      {shuffledPersons.map(({ name, age, occupation, id, photo }) => (
        <div key={id} className={businessCard}>
          <img className={imgStyle} src={photo} alt={id} />
          <h2>
            <span>{name}</span>
          </h2>

          <ul>
            <CardDetails text={"Age:"} detail={age} />
            <CardDetails text={"Occupation:"} detail={occupation} />
            <CardDetails text={"Id:"} detail={id} />
          </ul>
        </div>
      ))}
    </>
  );
};

export default Card;
