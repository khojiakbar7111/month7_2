import { useGlobalContext } from '../context';

export default function Login() {
	const { name, setName, psw, setPsw, login } = useGlobalContext();
	return (
		<div>
			<form className="login_box" onSubmit={login}>
				<input
					className="login_type1"
					type="text"
					placeholder="name type"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<input
					className="login_type"
					type="text"
					placeholder="passwordd type"
					required
					value={psw}
					onChange={(e) => setPsw(e.target.value)}
				/>
				<br />
				<button className="login_btn"> Submit</button>
			</form>
		</div>
	);
}
