import { useContext } from "react";

import { BuildingContext } from "../../../Context";

import styles from "./Shaft.module.scss";

import classNames from "classnames";

const Shaft = ({ callElevator, levels }) => {
	const { liftState } = useContext(BuildingContext);
	const { disabled, positionFloor } = liftState;

	const isActiveStyle = pos =>
		classNames(styles.inactive, {
			[styles.active]: positionFloor === pos,
		});

	return (
		<div className={styles.shaftButtons}>
			{levels.map(position => (
				<button
					disabled={disabled}
					key={position}
					onClick={() => callElevator(position)}
					className={isActiveStyle(position)}
				>
					{!disabled ? (
						position
					) : (
						<div className={styles.movingLiftStyle}></div>
					)}
				</button>
			))}
		</div>
	);
};

export default Shaft;
