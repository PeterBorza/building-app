import { useContext, useEffect } from 'react';

import { actions, actionTypes } from './LiftContext';

import { BuildingContext } from '../../Context';

import {
	container,
	block,
	leftSide,
	rightSide,
	control_panel,
	state_panel,
} from './Building.module.scss';

const levelsArray = numberOfLevels =>
	Array(numberOfLevels)
		.fill()
		.map((_, i) => i);

const Building = () => {
	const { liftState, dispatch } = useContext(BuildingContext);
	const { runLiftA, runLiftB, isMoving, upperLiftPosition } = actionTypes;
	const { elevatorButtonsControl, buttonsAreOn } = actions;

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
		dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
	}, [numberOfLevels, elevatorButtonsControl, upperLiftPosition, dispatch]);

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
			<div className={control_panel}>
				<Building.ControlPanel />
			</div>
			<div className={block} style={containerDynamicStyle}>
				<Building.Shaft
					levels={levelsArray}
					callElevator={callElevator}
					shaftDynamicStyle={shaftDynamicStyle}
				/>
				{lifts.map(lift => (
					<Building.Lift
						levels={levelsArray}
						insideLiftRequest={lift.handler}
						styling={lift.styling}
						key={lift.id}
						liftDynamicStyle={liftDynamicStyle(lift.position)}
						position={lift.position}
					/>
				))}
			</div>
			<div className={state_panel}>
				<Building.InitialState />
			</div>
		</div>
	);
};

export default Building;
