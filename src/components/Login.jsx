import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function Login() {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					dispatch(
						login({
							name: 'Berkay',
							age: 24,
							email: 'bcirak@hotmail.com',
						})
					);
				}}>
				Login
			</button>
		</div>
	);
}

export default Login;
