import { createContext, useState, useReducer } from 'react';

import { reducers } from '../components/Building/LiftContext';

export const BuildingContext = createContext();

export const BuildingData = ({ children }) => {
	const initialState = {
		numberOfLevels: 7,
		speed: 1000,
		liftHeight: 10,
		liftWidth: 20,
		positionA: 0,
		positionB: 6,
		positionFloor: 0,
		disabled: false,
	};
	const [liftState, dispatch] = useReducer(
		reducers.liftReducer,
		initialState
	);

	const [levels, setLevels] = useState([]);

	return (
		<BuildingContext.Provider
			value={{ initialState, liftState, dispatch, levels, setLevels }}
		>
			{children}
		</BuildingContext.Provider>
	);
};
