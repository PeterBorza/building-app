import { CardContext } from "../../../Context/CardContext";
import { useContext } from "react";
import styles from "./CardList.module.scss";
const CardList = () => {
  const { container } = styles;
  const [persons] = useContext(CardContext);
  return (
    <div className={container}>
      <h1>CardList</h1>
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
