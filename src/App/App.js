import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Main from '../components/Main';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Main />
			</Router>
		</div>
	);
}

export default App;
