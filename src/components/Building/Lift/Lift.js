import { useCallback, useContext } from 'react';

import { actions, actionTypes } from '../LiftContext';
import { BuildingContext } from '../../../Context';

import styles from './Lift.module.scss';
import classNames from 'classnames';

const { liftStyle, active } = styles;

const Lift = ({
	insideLiftRequest,
	styling,
	liftDynamicStyle,
	position,
	fontSizes,
	levels,
}) => {
	const { liftState, dispatch } = useContext(BuildingContext);
	const { numberOfLevels } = liftState;
	const { buttonsAreOn } = actions;
	const { isMoving } = actionTypes;

	const liftClassNames = classNames(liftStyle, styling);
	const buttonClassNames = liftButton =>
		classNames({
			[active]: liftButton === position,
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
		<div className={liftClassNames} style={liftDynamicStyle}>
			{levels(numberOfLevels).map(liftButton => (
				<button
					disabled={liftState.disabled}
					key={liftButton}
					className={buttonClassNames(liftButton)}
					onClick={() => controls(liftButton)}
					style={fontSizes}
				>
					{liftButton}
				</button>
			))}
		</div>
	);
};

export default Lift;
