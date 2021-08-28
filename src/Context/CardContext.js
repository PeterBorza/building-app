import { createContext, useState } from 'react';
import baloons from '../images/baloons400.jpg';
import deftones from '../images/deftones400.jpg';
import Peter from '../images/Peter400.jpg';
import wood from '../images/wood400.jpg';

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
	const [persons, setPersons] = useState([
		{
			name: 'Baloon5',
			age: '20',
			occupation: 'musician/band',
			id: Math.floor(Math.random() * 10000),
			photo: baloons,
		},
		{
			name: 'Deftones',
			age: '30',
			occupation: 'musician/band',
			id: Math.floor(Math.random() * 10000),
			photo: deftones,
		},
		{
			name: 'Peter',
			age: '42',
			occupation: 'software developer intern',
			id: Math.floor(Math.random() * 10000),
			photo: Peter,
		},
		{
			name: 'Woody Harrelson',
			age: '65',
			occupation: 'actor',
			id: Math.floor(Math.random() * 10000),
			photo: wood,
		},
	]);

	return (
		<CardContext.Provider value={[persons, setPersons]}>
			{children}
		</CardContext.Provider>
	);
};
