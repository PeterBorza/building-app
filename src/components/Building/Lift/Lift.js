import { useContext } from 'react';

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
}) => {
	const { liftState, dispatch, levels } = useContext(BuildingContext);
	const { buttonsAreOn } = actions;
	const { isMoving } = actionTypes;

	return (
		<div
			className={classNames(liftStyle, styling)}
			style={liftDynamicStyle}
		>
			{levels.map(liftButton => (
				<button
					disabled={liftState.disabled}
					key={liftButton}
					className={classNames({
						[active]: liftButton === position,
					})}
					onClick={() => {
						dispatch({
							type: insideLiftRequest,
							value: liftButton,
						});
						setTimeout(
							() => dispatch(buttonsAreOn(isMoving, true)),
							liftState.speed
						);
					}}
					style={fontSizes}
				>
					{liftButton}
				</button>
			))}
		</div>
	);
};

export default Lift;
