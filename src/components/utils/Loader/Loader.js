import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({ dotCount, delayTime }) => {
    const loadingDotCount = new Array(dotCount)
        .fill()
        .map((item, i) => item === i);
    const delay = idx => ({
        animationDelay: `${idx * delayTime}ms`,
    });
    const { loader_bg, loader_dots, dot } = styles;

    return (
        <div className={loader_bg}>
            <div className={loader_dots}>
                {loadingDotCount.map((_, idx) => (
                    <div key={idx} className={dot} style={delay(idx)}></div>
                ))}
            </div>
        </div>
    );
};

export default Loader;
