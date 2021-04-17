import * as actions from "./lift-actionTypes";

export const liftReducer = (state, action) => {
    const { type, value, field } = action;
    switch (type) {
        case actions.runLiftA:
            return {
                ...state,
                positionA: value,
                positionFloor: value,
                disabled: true,
            };
        case actions.runLiftB:
            return {
                ...state,
                positionB: value,
                positionFloor: value,
                disabled: true,
            };
        case actions.isMoving:
            return {
                ...state,
                disabled: false,
            };
        case actions.changeLevelCount:
            return {
                ...state,
                numberOfLevels: value,
            };
        case actions.upperLiftPosition:
            return {
                ...state,
                positionB: value,
            };
        case actions.changeHeight:
            return {
                ...state,
                liftHeight: value,
            };
        case actions.changeWidth:
            return {
                ...state,
                liftWidth: value,
            };
        case actions.fieldActions:
            return {
                ...state,
                [field]: value,
            };

        default:
            return state;
    }
};

export const levelsArray = numberOfLevels =>
    Array(numberOfLevels)
        .fill()
        .map((_, i) => i);
