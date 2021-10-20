import { useCallback, useContext } from "react";

import { actions, actionTypes } from "../LiftContext";
import { BuildingContext } from "../../../Context";

import styles from "./Lift.module.scss";
import classNames from "classnames";

const Lift = ({ insideLiftRequest, styling, position, levels }) => {
	const { liftState, dispatch } = useContext(BuildingContext);
	const { speed, liftHeight } = liftState;
	const { buttonsAreOn } = actions;
	const { isMoving } = actionTypes;

	const liftClassNames = classNames(
		styles.liftStyle,
		styling,
		styles[`height-${liftHeight}`],
		styles[`transition-${speed}`],
		styles[`transform-${position}`]
	);
	const buttonClassNames = liftButton =>
		classNames({
			[styles.active]: liftButton === position,
		});

	const controls = useCallback(
		liftButton => {
			dispatch({
				type: insideLiftRequest,
				value: liftButton,
			});
			setTimeout(
				() => dispatch(buttonsAreOn(isMoving, true)),
				liftState.speed
			);
		},
		[insideLiftRequest, buttonsAreOn, dispatch, isMoving, liftState.speed]
	);

	return (
		<div className={liftClassNames}>
			{levels.map(liftButton => (
				<button
					disabled={liftState.disabled}
					key={liftButton}
					className={buttonClassNames(liftButton)}
					onClick={() => controls(liftButton)}
				>
					{liftButton}
				</button>
			))}
		</div>
	);
};

export default Lift;
