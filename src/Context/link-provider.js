import { createContext } from 'react';
import FruitCard, { Fruit } from '../components/FruitCard';
import HomePage from '../components/HomePage';
import Projects from '../components/Quiz/';
import Building from '../components/Building';
import BusinessCard from '../components/BusinessCardPage';
import { Portfolio } from '../components/Portfolio';
import Digits from '../components/Digits/Digits';

export const LinkContext = createContext();

export const LinkContextProvider = ({ children }) => {
	const links = [
		{
			path: '/',
			exact: true,
			component: HomePage,
			title: 'Jokes',
			id: 1,
		},
		{
			path: '/quiz',
			exact: false,
			component: Projects,
			title: 'Quiz',
			id: 2,
		},
		{
			path: '/building',
			exact: false,
			component: Building,
			title: 'Building',
			id: 3,
		},
		{
			path: '/businesscard',
			exact: false,
			component: BusinessCard,
			title: 'BusinessCard',
			id: 4,
		},
		{
			path: '/fruitcard',
			exact: true,
			component: FruitCard,
			title: 'Fruits',
			id: 5,
		},
		{
			path: '/portfolio',
			exact: false,
			component: Portfolio,
			title: 'Portfolio',
			id: 6,
		},
		{
			path: '/digits',
			exact: false,
			component: Digits,
			title: 'Digits',
			id: 7,
		},
		{
			path: '/fruitcard/:id',
			component: Fruit,
			title: '',
			exact: false,
			id: 8,
		},
	];

	return (
		<LinkContext.Provider value={links}>{children}</LinkContext.Provider>
	);
};
