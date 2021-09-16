import React, { useContext } from 'react';

import { DigitContext } from '../../Context';

import styles from './Digits.module.scss';
import classNames from 'classnames';

const Digits = () => {
	const [digits, keyPressed, setKeyPressed] = useContext(DigitContext);

	const selectedNumber = key =>
		digits
			.filter(digit => String(digit.key) === key)
			.map(num =>
				num.stripes.map(stripe => (
					<div
						key={`digit-${stripe}`}
						className={classNames(
							styles.position_dimension,
							styles[`box${stripe}`]
						)}
					></div>
				))
			);

	const getKey = e => setKeyPressed(e.key);

	return (
		<div className={styles.digitContainer}>
			<div className={styles.container} tabIndex={0} onKeyDown={getKey}>
				<div className={styles.digit_box}>
					{selectedNumber(keyPressed)}
				</div>
			</div>
		</div>
	);
};

export default Digits;
