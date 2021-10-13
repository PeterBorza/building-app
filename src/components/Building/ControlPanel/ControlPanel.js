import { useCallback, useContext, useState } from 'react';

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
		stateLiftHeight: liftHeight,
		stateLiftWidth: liftWidth,
		stateNumberOfLevels: numberOfLevels,
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
						<label>
							Levels:
							<input
								type='text'
								value={stateNumberOfLevels}
								name='stateNumberOfLevels'
								onChange={onChangeHandler}
							/>
						</label>
						<label>
							Lift height:
							<input
								type='text'
								value={stateLiftHeight}
								name='stateLiftHeight'
								onChange={onChangeHandler}
							/>
						</label>
						<label>
							Block width:
							<input
								type='text'
								value={stateLiftWidth}
								name='stateLiftWidth'
								onChange={onChangeHandler}
							/>
						</label>
						<label>
							Speed
							<input
								type='text'
								value={stateSpeed}
								name='stateSpeed'
								onChange={onChangeHandler}
							/>
						</label>
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
