import { useCallback, useContext, useEffect } from "react";
import { Lift, Shaft, InitialState, ControlPanel } from "../Building";

import { actions, actionTypes } from "./LiftContext";
import { BuildingContext } from "../../Context";

import styles from "./Building.module.scss";
import classNames from "classnames";

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
	} = liftState;

	const levelsArray = Array(numberOfLevels)
		.fill()
		.map((_, i) => i);

	const blockClassNames = classNames(
		styles.block,
		styles[`width-${liftWidth}`]
	);

	useEffect(() => {
		dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
	}, [numberOfLevels, elevatorButtonsControl, upperLiftPosition, dispatch]);

	const callElevator = useCallback(
		floorButton => {
			setTimeout(() => dispatch(buttonsAreOn(isMoving, true)), speed);

			const difA = Math.abs(positionA - floorButton);
			const difB = Math.abs(positionB - floorButton);
			const executeCommand = liftName =>
				dispatch(elevatorButtonsControl(liftName, floorButton));

			difA < difB
				? executeCommand(runLiftA)
				: difA > difB
				? executeCommand(runLiftB)
				: positionA <= positionB
				? executeCommand(runLiftA)
				: executeCommand(runLiftB);
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

	return (
		<div className={styles.container}>
			<div className={styles.control_panel}>
				<ControlPanel />
			</div>
			<div
				className={blockClassNames}
				style={{ height: `${liftHeight * numberOfLevels}vh` }}
			>
				<Lift
					levels={levelsArray}
					insideLiftRequest={runLiftA}
					styling={styles.leftSide}
					position={positionA}
				/>

				<Shaft levels={levelsArray} callElevator={callElevator} />

				<Lift
					levels={levelsArray}
					insideLiftRequest={runLiftB}
					styling={styles.rightSide}
					position={positionB}
				/>
			</div>
			<div className={styles.state_panel}>
				<InitialState />
			</div>
		</div>
	);
};

export default Building;
