import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Rubik.module.scss';
import { RubikContext } from './rubik-context';
import { GlowButton } from '../../components/utils';

export const Rubik = () => {
	const rubikData = useContext(RubikContext);
	const wrapper = useRef(null);
	const [moveX, setMoveX] = useState('');

	useEffect(() => {
		wrapper.current.style.transform += moveX;
		setMoveX('');
	}, [moveX]);

	const handleLeftRight = () => {
		setMoveX(`rotateX(90deg)`);
	};
	const handleUpDown = () => {
		setMoveX(`rotateY(90deg)`);
	};
	const handleFront = () => {
		setMoveX(`rotateZ(90deg)`);
	};

	const sideStyles = (transform, url) => {
		return {
			transform,
			backgroundImage: `url(${url})`,
		};
	};

	const sides = rubikData
		.transforms()
		.map((side, i) => (
			<div
				key={`side${i}`}
				className={styles.rubikSide}
				style={sideStyles(side, rubikData.images[i])}
			></div>
		));

	return (
		<>
			<div className={styles.buttonsWrapper}>
				<GlowButton handler={handleUpDown} title='right' />
				<GlowButton handler={handleLeftRight} title='up' />
				<GlowButton handler={handleFront} title='front' />
			</div>
			<div ref={wrapper} className={styles.rubikWrapper}>
				{sides}
			</div>
		</>
	);
};
