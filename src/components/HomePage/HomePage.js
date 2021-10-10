import { useState, useEffect } from 'react';

import { Neon } from '../utils';

import styles from './HomePage.module.scss';

const url = `https://api.chucknorris.io/jokes/random`;

const HomePage = () => {
	const [joke, setJoke] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setJoke(data);
			} catch (err) {
				console.log('ERROR:', err.message);
			}
		};
		loading && fetchData();
	}, [loading]);

	return (
		<div className={styles.homePage}>
			<h1>Chuck Load o'Shea</h1>
			<Neon
				handler={() => setLoading(!loading)}
				title={'Get a new Chuck Norris joke'}
			></Neon>
			<div className={styles.jokeBox}>
				{loading ? joke.value : 'No fetching'}
			</div>
		</div>
	);
};

export default HomePage;
