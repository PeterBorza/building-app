import { useEffect, useReducer, useState } from 'react';

import { liftContext, actions, actionTypes, reducers } from './LiftContext';
import { Lift, Shaft, InitialState, ControlPanel } from '../Building';

import styles from './Building.module.scss';

const levelsArray = numberOfLevels =>
	Array(numberOfLevels)
		.fill()
		.map((_, i) => i);

const { container, block, leftSide, rightSide, control_panel, state_panel } =
	styles;

const NewBuilding = () => {
	const [levels, setLevels] = useState([]);
	const { LiftStateContext, LiftDispatchContext, initialState } = liftContext;
	const { runLiftA, runLiftB, isMoving, upperLiftPosition } = actionTypes;
	const { elevatorButtonsControl, buttonsAreOn } = actions;

	const [liftState, dispatch] = useReducer(
		reducers.liftReducer,
		initialState
	);

	const {
		numberOfLevels,
		speed,
		liftHeight,
		liftWidth,
		positionA,
		positionB,
		positionFloor,
	} = liftState;

	useEffect(() => {
		setLevels(levelsArray(numberOfLevels));
		dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
	}, [numberOfLevels, elevatorButtonsControl, upperLiftPosition]);

	const callElevator = floorButton => {
		setTimeout(() => dispatch(buttonsAreOn(isMoving, true)), speed);

		const difA = Math.abs(positionA - floorButton);
		const difB = Math.abs(positionB - floorButton);
		const runLift = liftName =>
			dispatch(elevatorButtonsControl(liftName, floorButton));

		difA < difB
			? runLift(runLiftA)
			: difA > difB
			? runLift(runLiftB)
			: positionA <= positionB
			? runLift(runLiftA)
			: runLift(runLiftB);
	};

	// DATA ****************************************************

	const liftDynamicStyle = position => ({
		height: `${liftHeight}vh`,
		transition: `transform ${speed}ms ease-in-out`,
		transform: `translateY(${-position * 100}%)`,
	});

	const containerDynamicStyle = {
		height: `${liftHeight * numberOfLevels}vh`,
		width: `${liftWidth}vw`,
	};

	const shaftDynamicStyle = position => ({
		fontSize: numberOfLevels > 11 && liftHeight < 9 ? '.8rem' : '1.5rem',
		color: positionFloor === position ? 'white' : 'rgb(24, 92, 45)',
	});

	const lifts = [
		{
			id: 0,
			position: positionA,
			styling: leftSide,
			handler: runLiftA,
		},
		{
			id: 1,
			position: positionB,
			styling: rightSide,
			handler: runLiftB,
		},
	];

	return (
		<div className={container}>
			<LiftStateContext.Provider value={{ liftState, levels }}>
				<LiftDispatchContext.Provider value={dispatch}>
					<div className={control_panel}>
						<ControlPanel />
					</div>
					<div className={block} style={containerDynamicStyle}>
						<Shaft
							levels={levels}
							callElevator={callElevator}
							shaftDynamicStyle={shaftDynamicStyle}
						/>
						{lifts.map(lift => (
							<Lift
								insideLiftRequest={lift.handler}
								styling={lift.styling}
								key={lift.id}
								liftDynamicStyle={liftDynamicStyle(
									lift.position
								)}
								position={lift.position}
								fontSizes={{
									fontSize:
										numberOfLevels > 11 && liftHeight < 9
											? '.8rem'
											: '1.5rem',
								}}
							/>
						))}
					</div>
					<div className={state_panel}>
						<InitialState />
					</div>
				</LiftDispatchContext.Provider>
			</LiftStateContext.Provider>
		</div>
	);
};

export default NewBuilding;
