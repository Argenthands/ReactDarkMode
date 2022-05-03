import React from 'react';
import {
	Routes,
	Route
} from 'react-router-dom'
import { Users } from './Context/Users';
import {
	Home,
	NotFound
} from './pages'
import './App.css';

function App() {
	return (
		<div className="App">
			<Users.Provider value={1}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Users.Provider>
		</div>
	);
}

export default App;
