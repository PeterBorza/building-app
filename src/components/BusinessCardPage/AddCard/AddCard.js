import CardList from "../CardList";
import styles from "./AddCard.module.scss";

const AddCard = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ position: "absolute", color: "red", top: "3%" }}>
        Work in Progress
      </h1>
      <CardList />
    </div>
  );
};

export default AddCard;
