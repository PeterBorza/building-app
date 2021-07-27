import React from "react";
import { card_details } from "./CardDetails.module.scss";

const CardDetails = ({ text, detail }) => {
    return (
        <li className={card_details}>
            {text}
            <span>{detail}</span>
        </li>
    );
};

export default CardDetails;
