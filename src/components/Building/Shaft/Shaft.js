import { useContext } from 'react';

import { BuildingContext } from '../../../Context';

import { shaftButtons, movingLiftStyle } from './Shaft.module.scss';

const Shaft = ({ callElevator, shaftDynamicStyle, levels }) => {
	const { liftState } = useContext(BuildingContext);
	const { disabled, numberOfLevels } = liftState;

	return (
		<div className={shaftButtons}>
			{levels(numberOfLevels).map(floorButton => (
				<button
					disabled={disabled}
					key={floorButton}
					onClick={() => callElevator(floorButton)}
					style={shaftDynamicStyle(floorButton)}
				>
					{!disabled ? (
						floorButton
					) : (
						<div className={movingLiftStyle}></div>
					)}
				</button>
			))}
		</div>
	);
};

export default Shaft;
