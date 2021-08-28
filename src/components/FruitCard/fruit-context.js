import { createContext } from 'react';
import apple from '../../images/apple400.jpg';
import orange from '../../images/orange400.jpg';
import lemon from '../../images/lemon400.jpg';
import apricot from '../../images/apricots400.jpg';
import pear from '../../images/pear400.jpg';
import mango from '../../images/mango400.jpg';
import bananas from '../../images/bananas400.jpg';
import grapes from '../../images/grapes400.jpg';

export const FruitData = createContext();

export const FruitDataProvider = ({ children }) => {
	const fruits = [
		{
			src: apple,
			title: 'apple',
			id: 100,
		},
		{
			src: orange,
			title: 'orange',
			id: 101,
		},
		{
			src: lemon,
			title: 'lemon',
			id: 102,
		},
		{
			src: apricot,
			title: 'apricot',
			id: 103,
		},
		{
			src: pear,
			title: 'pear',
			id: 104,
		},
		{
			src: mango,
			title: 'mango',
			id: 105,
		},
		{
			src: bananas,
			title: 'bananas',
			id: 106,
		},
		{
			src: grapes,
			title: 'grapes',
			id: 107,
		},
	];
	return <FruitData.Provider value={[fruits]}>{children}</FruitData.Provider>;
};
