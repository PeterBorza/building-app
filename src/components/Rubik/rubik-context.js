import { createContext } from "react";

import apple from "images/apple400.jpg";
import orange from "images/orange400.jpg";
import lemon from "images/lemon400.jpg";
import apricot from "images/apricots400.jpg";
import pear from "images/pear400.jpg";
import mango from "images/mango400.jpg";
import bananas from "images/bananas400.jpg";
import grapes from "images/grapes400.jpg";

export const RubikContext = createContext();

export const RubikContextProvider = ({ children }) => {
  const rubikData = {
    sideParts: [
      "3E4E50",
      "FACFAD",
      "F8BD7F",
      "F5AC72",
      "F2AA7E",
      "D8D4F2",
      "C4B2BC",
      "A29587",
      "846C5B",
    ],
    images: [apple, orange, lemon, apricot, pear, mango, bananas, grapes],
    size: "125px",
    transforms: function () {
      return [
        `translateZ(-${this.size})`,
        `translateX(100%) rotateY(270deg) translateZ(${this.size})`,
        `translateX(-100%) rotateY(90deg) translateZ(${this.size})`,
        `rotateX(90deg) translateZ(${this.size})`,
        ` rotateX(270deg) translateZ(${this.size})`,
        ` translateZ(${this.size})`,
      ];
    },
  };

  return (
    <RubikContext.Provider value={rubikData}>{children}</RubikContext.Provider>
  );
};
