import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network-data';

function LoginPage() {
  const navigate = useNavigate();
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLogin = async (e) => {
    e.preventDefault();

    const user = await login({ email, password });
    if (!user.error) {
      putAccessToken(user.data.accessToken);
      navigate('/');
    }
  };

  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title mb'>Login to create note</h2>

        <div className='note-input'>
          <form onSubmit={onLogin}>
            <input
              type='text'
              name='email'
              placeholder='Email'
              required
              value={email}
              onChange={onEmailChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
              value={password}
              onChange={onPasswordChange}
            />
            <button type='submit'>LOGIN</button>
          </form>

          <p className='helper-text'>
            Don't have account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
