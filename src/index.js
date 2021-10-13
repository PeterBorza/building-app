import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { LinkContextProvider, DigitData, BuildingData } from './Context';
import { FruitDataProvider } from './components/FruitCard/fruit-context';
// import { RubikContextProvider } from './components/Rubik/rubik-context';

ReactDOM.render(
	<React.StrictMode>
		<BuildingData>
			<DigitData>
				<FruitDataProvider>
					<LinkContextProvider>
						{/* <RubikContextProvider> */}
						<App />
						{/* </RubikContextProvider> */}
					</LinkContextProvider>
				</FruitDataProvider>
			</DigitData>
		</BuildingData>
	</React.StrictMode>,
	document.getElementById('root')
);
