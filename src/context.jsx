/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import Loading from './components/Loding';
import { reducer } from './reducer';
import { uid } from 'uid';
import { getUser } from './utilis';

const url = 'https://course-api.com/react-tours-project';
const AppContext = createContext();
const initialState = {
	loading: false,
	list: [],
};
const AppProvider = ({ children }) => {
 const id = uid();
	const [state, dispatch] = useReducer(reducer, initialState);

	const load = () => {
		dispatch({ type: 'LOADING' });
	};
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);
 const [ name, setName] = useState('');
 const[psw, setPsw] = useState('');
 const [sign, setSign] = useState(false);
 const [user, setUser] = useState(getUser('user'));

 const login = () => {
		const newUser = { id: id, name: name, psw: psw };
		setUser(newUser);
	};

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		load();
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		const response = await fetch(url);
		const list = await response.json();
		dispatch({ type: 'FETCH', payload: list });
	};

	useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user));
		fetchData();
		fetchTours();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button className="btn" onClick={() => fetchTours()}>
						refresh
					</button>
				</div>
			</main>
		);
	}
	return (
		<AppContext.Provider
			value={{ url, loading, setLoading, tours, setTours, removeTour, ...state, name,setName,psw,setPsw,sign,setSign,user,setUser,login }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
