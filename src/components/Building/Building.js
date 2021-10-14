import { useCallback, useContext, useEffect } from 'react';

import { actions, actionTypes } from './LiftContext';

import { BuildingContext } from '../../Context';

import { Lift, Shaft, InitialState, ControlPanel } from '../Building';

import {
	container,
	block,
	leftSide,
	rightSide,
	control_panel,
	state_panel,
	active,
	inactive,
} from './Building.module.scss';

import classNames from 'classnames';

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

	const isActiveStyle = position =>
		classNames(inactive, {
			[active]: positionFloor === position,
		});

	useEffect(() => {
		dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
	}, [numberOfLevels, elevatorButtonsControl, upperLiftPosition, dispatch]);

	const callElevator = useCallback(
		floorButton => {
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
		},
		[
			positionA,
			positionB,
			buttonsAreOn,
			dispatch,
			elevatorButtonsControl,
			isMoving,
			runLiftA,
			runLiftB,
			speed,
		]
	);

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
				<ControlPanel />
			</div>
			<div className={block} style={containerDynamicStyle}>
				<Shaft
					levels={levelsArray}
					callElevator={callElevator}
					shaftDynamicStyle={isActiveStyle}
				/>
				{lifts.map(lift => (
					<Lift
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
				<InitialState />
			</div>
		</div>
	);
};

export default Building;
