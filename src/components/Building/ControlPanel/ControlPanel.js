import { useCallback, useContext, useState } from 'react';

import LabeledInput from './LabeledInput';

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
		stateNumberOfLevels: numberOfLevels,
		stateLiftHeight: liftHeight,
		stateLiftWidth: liftWidth,
		stateSpeed: speed,
	});

	const { stateLiftHeight, stateLiftWidth, stateNumberOfLevels, stateSpeed } =
		values;

	const emptyInput = item => Number(item) === 0;

	const onChangeHandler = e => {
		const value = e.target.value;
		setValues({
			...values,
			[e.target.name]: value,
		});
	};

	const submitNewData = useCallback(
		e => {
			e.preventDefault();

			if (
				emptyInput(stateLiftHeight) ||
				emptyInput(stateLiftWidth) ||
				emptyInput(stateNumberOfLevels) ||
				emptyInput(stateSpeed)
			) {
				setError(true);
				return;
			}
			dispatch(fieldValues('numberOfLevels', stateNumberOfLevels));
			dispatch(fieldValues('liftHeight', stateLiftHeight));
			dispatch(fieldValues('liftWidth', stateLiftWidth));
			dispatch(fieldValues('speed', stateSpeed));
		},
		[
			stateLiftHeight,
			stateLiftWidth,
			stateNumberOfLevels,
			stateSpeed,
			dispatch,
			fieldValues,
		]
	);

	return (
		<div className={controlPanel}>
			{error ? (
				<div className={errorPanel}>
					<span>
						You must provide a greater than 0 value to all fields!
					</span>
					<button
						className={controlButton}
						onClick={() => setError(false)}
					>
						Try again
					</button>
				</div>
			) : (
				<>
					<h2>Controls</h2>
					<form onSubmit={submitNewData}>
						<LabeledInput
							defaultValue={stateNumberOfLevels}
							name='stateNumberOfLevels'
							handler={onChangeHandler}
							labelText='Levels:'
						/>
						<LabeledInput
							defaultValue={stateLiftHeight}
							name='stateLiftHeight'
							handler={onChangeHandler}
							labelText='Lift Height:'
						/>
						<LabeledInput
							defaultValue={stateLiftWidth}
							name='stateLiftWidth'
							handler={onChangeHandler}
							labelText='Block Width:'
						/>
						<LabeledInput
							defaultValue={stateSpeed}
							name='stateSpeed'
							handler={onChangeHandler}
							labelText='Speed:'
						/>
						<button className={controlButton} type='submit'>
							Submit
						</button>
					</form>
				</>
			)}
		</div>
	);
};

export default ControlPanel;
