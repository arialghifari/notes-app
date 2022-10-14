import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onRegister = async (e) => {
    e.preventDefault();

    const data = await register({ name, email, password, confirmPassword });
    if (!data.error) navigate('/login')
  };

  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title mb'>Register to create note</h2>

        <div className='note-input'>
          <form onSubmit={onRegister}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              value={name}
              onChange={onNameChange}
            />
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
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              required
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            />
            <button type='submit'>REGISTER</button>
          </form>

          <p className='helper-text'>
            Already have account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
