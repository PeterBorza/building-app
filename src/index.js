import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { LinkContextProvider } from './Context/link-provider';
import { FruitDataProvider } from './components/FruitCard/fruit-context';
import { DigitData } from './Context/digit-context';
import { BuildingData } from './Context/building-context';

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
