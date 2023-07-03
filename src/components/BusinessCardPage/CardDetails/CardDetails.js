import React from "react";
import styles from "./CardDetails.module.scss";

const CardDetails = ({ text, detail }) => {
  return (
    <li className={styles.card_details}>
      {text}
      <span>{detail}</span>
    </li>
  );
};

export default CardDetails;
