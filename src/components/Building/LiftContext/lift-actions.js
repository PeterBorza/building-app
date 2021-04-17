import { fieldActions } from "./lift-actionTypes";

export const elevatorButtonsControl = (type, value) => ({
    type,
    value,
});
export const buttonsAreOn = (type, disabled) => ({
    type,
    disabled,
});
export const fieldValues = (field, value) => ({
    type: fieldActions,
    field,
    value: Number(value),
});
