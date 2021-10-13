import { Rubik } from '../Rubik/Rubik';
import styles from './Rubik.module.scss';
import { RubikContextProvider } from './rubik-context';

const RubikWrapper = () => {
	return (
		<div className={styles.rubikContainer}>
			<RubikContextProvider>
				<Rubik />
			</RubikContextProvider>
		</div>
	);
};

export default RubikWrapper;
