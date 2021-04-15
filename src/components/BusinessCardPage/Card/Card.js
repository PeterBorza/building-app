import { useContext } from "react";
import styles from "./Card.module.scss";
import { CardContext } from "../../../Context/CardContext";
import { ImageContext } from "../../../Context/ImageContext";

const Card = () => {
  const { businessCard, imgStyle } = styles;
  const [persons] = useContext(CardContext);
  const [images] = useContext(ImageContext);
  return (
    <>
      {persons.map(({ name, age, occupation, id }, i) => (
        <div key={id} className={businessCard}>
          <img className={imgStyle} src={images[i]} alt={id} />
          <h2>
            <span>{name}</span>
          </h2>

          <ul>
            <li>
              <p>
                Age: <span>{age}</span>
              </p>
            </li>

            <li>
              <p>
                Occupation: <span>{occupation}</span>
              </p>
            </li>

            <li>
              <p>
                Id: <span>{id}</span>
              </p>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Card;
