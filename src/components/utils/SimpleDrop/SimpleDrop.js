import { useState } from 'react';

import './SimpleDrop.scss';

import classNames from 'classnames';

const SimpleDrop = ({ children, title = 'Click', contentStyle }) => {
	const [drop, setDrop] = useState(false);
	const classes = classNames(
		'content',
		{
			'content--drop': drop,
			'white-bg': !contentStyle,
			'black-bg': drop,
		},
		contentStyle
	);

	return (
		<div className='dropdown-container'>
			<div
				className='header'
				onClick={() => setDrop(!drop)}
				title='SimpleDrop'
			>
				<h3>{title}</h3>
			</div>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default SimpleDrop;
