import {
  runLiftA,
  runLiftB,
  isMoving,
  changeLevelCount,
  upperLiftPosition,
  changeHeight,
  changeWidth,
  field,
} from "./lift-actions";

const liftReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case runLiftA:
      return {
        ...state,
        positionA: value,
        positionFloor: value,
        disabled: true,
      };
    case runLiftB:
      return {
        ...state,
        positionB: value,
        positionFloor: value,
        disabled: true,
      };
    case isMoving:
      return {
        ...state,
        disabled: false,
      };
    case changeLevelCount:
      return {
        ...state,
        numberOfLevels: value,
      };
    case upperLiftPosition:
      return {
        ...state,
        positionB: value,
      };
    case changeHeight:
      return {
        ...state,
        liftHeight: value,
      };
    case changeWidth:
      return {
        ...state,
        liftWidth: value,
      };
    case field:
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
};

export default liftReducer;
