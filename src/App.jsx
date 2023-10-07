import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage.jsx';
import './App.css';

function App() {
	return (
		<Router>
			<div className='app'>
				<Routes>
					<Route path='/' exact element={<MainPage />} />
					{/* Add a route for the DetailPage component */}
					<Route path='/cocktail/:id' element={<DetailPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
