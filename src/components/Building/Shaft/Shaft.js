import { useContext } from 'react';

import { BuildingContext } from '../../../Context';

import { shaftButtons, movingLiftStyle } from './Shaft.module.scss';

const Shaft = ({ callElevator, shaftDynamicStyle, levels }) => {
	const { liftState } = useContext(BuildingContext);
	const { disabled, numberOfLevels } = liftState;

	return (
		<div className={shaftButtons}>
			{levels(numberOfLevels).map(position => (
				<button
					disabled={disabled}
					key={position}
					onClick={() => callElevator(position)}
					className={shaftDynamicStyle(position)}
				>
					{!disabled ? (
						position
					) : (
						<div className={movingLiftStyle}></div>
					)}
				</button>
			))}
		</div>
	);
};

export default Shaft;
