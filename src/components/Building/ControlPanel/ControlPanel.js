import { useContext, useState } from 'react';

import { actions } from '../LiftContext';
import { BuildingContext } from '../../../Context';
import styles from './ControlPanel.module.scss';

const { controlPanel, errorPanel, controlButton } = styles;

const ControlPanel = () => {
	const { liftState, dispatch } = useContext(BuildingContext);
	const { fieldValues } = actions;
	const { liftHeight, liftWidth, numberOfLevels, speed } = liftState;
	const [error, setError] = useState(false);
	const [values, setValues] = useState({
		LIFT_HEIGHT: liftHeight,
		BUILDING_WIDTH: liftWidth,
		NUMBER_OF_LEVELS: numberOfLevels,
		SPEED: speed,
	});
	const { LIFT_HEIGHT, BUILDING_WIDTH, NUMBER_OF_LEVELS, SPEED } = values;

	const submitNewData = e => {
		e.preventDefault();

		Number(LIFT_HEIGHT) === 0 ||
		Number(BUILDING_WIDTH) === 0 ||
		Number(NUMBER_OF_LEVELS) === 0 ||
		Number(SPEED) === 0
			? setError(true)
			: dispatch(fieldValues('numberOfLevels', NUMBER_OF_LEVELS));
		dispatch(fieldValues('liftHeight', LIFT_HEIGHT));
		dispatch(fieldValues('liftWidth', BUILDING_WIDTH));
		dispatch(fieldValues('speed', SPEED));
	};

	// *************************************************************

	return (
		<div className={controlPanel}>
			{error ? (
				<div className={errorPanel}>
					<p>
						You must provide a greater than 0 value to all fields!
					</p>
					<button
						className={controlButton}
						onClick={() => setError(false)}
					>
						Try again
					</button>
				</div>
			) : (
				<form onSubmit={submitNewData}>
					Levels:
					<input
						type='text'
						value={NUMBER_OF_LEVELS}
						onChange={e =>
							setValues({
								...values,
								NUMBER_OF_LEVELS: e.target.value,
							})
						}
					/>
					Lift height:
					<input
						type='text'
						value={LIFT_HEIGHT}
						onChange={e =>
							setValues({
								...values,
								LIFT_HEIGHT: e.target.value,
							})
						}
					/>
					Block width:
					<input
						type='text'
						value={BUILDING_WIDTH}
						onChange={e =>
							setValues({
								...values,
								BUILDING_WIDTH: e.target.value,
							})
						}
					/>
					Speed
					<input
						type='text'
						value={SPEED}
						onChange={e =>
							setValues({ ...values, SPEED: e.target.value })
						}
					/>
					<button className={controlButton} type='submit'>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default ControlPanel;
