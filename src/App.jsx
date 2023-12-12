/* eslint-disable no-undef */

import Tours from './components/Tours';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { useGlobalContext } from './context';
import './App.css';
import ProtectedRoute from './components/ProtectedRoture';
// import { useGlobalContext } from './context';

function App() {
	// const {list } = useGlobalContext()
	const { sign } = useGlobalContext();
	return (
		<main>
			{/* {list.map((item) => {
			return(
				<div key={item.id}>
					<img src={item.image} alt="" />
				</div>
			)
		})} */}
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />{' '}
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={sign && <Login />} />
				<Route
					path="/tours"
					element={
						<ProtectedRoute>
							{' '}
							<Tours />
						</ProtectedRoute>
					}
				/>

				<Route path="/single/:id" element={<SinglePage />} />
			</Routes>
		</main>
	);
}

export default App;
