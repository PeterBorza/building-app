import { useContext } from "react";

import { CardContext } from "Context";

import styles from "./CardList.module.scss";

const CardList = () => {
  const [persons] = useContext(CardContext);

  return (
    <div className={styles.container}>
      <h1>CardList</h1>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
