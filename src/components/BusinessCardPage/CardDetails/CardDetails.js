import React from "react";
import styles from "./CardDetails.module.scss";

const CardDetails = ({ text, detail }) => {
    return (
        <li className={styles.card_details}>
            <p>
                {text}
                <span>{detail}</span>
            </p>
        </li>
    );
};

export default CardDetails;
