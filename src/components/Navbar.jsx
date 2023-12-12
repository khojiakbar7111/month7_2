import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Navbar() {
	const { user, sign, setSign } = useGlobalContext();
	return (
		<div>
			<ul className="nav_box">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tour">Tour</Link>
				</li>
				<li>
					<Link to="/tours">Tours</Link>
				</li>
				<li>
					{' '}
					<Link to="/login">
						<button onClick={() => setSign(!sign)} className="nav_link_btn">
							{user ? user.name : ' Kirish'}
						</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
