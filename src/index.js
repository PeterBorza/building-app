import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { LinkContextProvider, DigitData, BuildingData } from './Context';
import { FruitDataProvider } from './components/FruitCard/fruit-context';

ReactDOM.render(
	<React.StrictMode>
		<BuildingData>
			<DigitData>
				<FruitDataProvider>
					<LinkContextProvider>
						<App />
					</LinkContextProvider>
				</FruitDataProvider>
			</DigitData>
		</BuildingData>
	</React.StrictMode>,
	document.getElementById('root')
);
