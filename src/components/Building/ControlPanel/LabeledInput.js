import React from 'react';
import styles from './LabeledInput.module.scss';

const LabeledInput = ({ defaultValue, name, handler, labelText }) => {
	return (
		<label className={styles.labelWrapper}>
			<span>{labelText}</span>
			<input
				className={styles.inputStyle}
				type='text'
				value={defaultValue}
				name={name}
				onChange={handler}
			/>
		</label>
	);
};

export default LabeledInput;
