import React, { useState } from "react";

import styles from "./Portfolio.module.scss";

import Peter1 from "../../images/Peter1-400.jpg";

import classNames from "classnames";

const {
  container,
  main_frame,
  title,
  red,
  yellow,
  red__animate,
  yellow__animate,
  __showText,
} = styles;

const data = {
  title: "I like IT",
  img: Peter1,
  skills: "Skills",
  skillList: "HTML, CSS, Javascript ES6, React, Typescript, Jest",
};

const Portfolio = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className={container}>
      <div className={main_frame} onClick={() => setAnimate(!animate)}>
        <h1>
          <span className={animate ? __showText : undefined}>{data.title}</span>
        </h1>
        <div className={title}>
          <img src={data.img} alt="" />
          <h2>{data.skills}</h2>
          <p>{data.skillList}</p>
        </div>
        <div
          className={classNames(yellow, animate ? yellow__animate : undefined)}
        ></div>
        <div
          className={classNames(red, animate ? red__animate : undefined)}
        ></div>
      </div>
    </div>
  );
};

export default Portfolio;
