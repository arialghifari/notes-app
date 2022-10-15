import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocaleContext from '../context/LocaleContext';
import useInput from '../hooks/useInput';
import { registerPage } from '../utils/content';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = useContext(LocaleContext);

  const onRegister = async (e) => {
    e.preventDefault();

    const data = await register({ name, email, password, confirmPassword });
    if (!data.error) navigate('/login');
  };

  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title mb'>{registerPage[locale].title}</h2>

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
              placeholder={registerPage[locale].confirmPassword}
              required
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            />
            <button type='submit'>{registerPage[locale].button}</button>
          </form>

          <p className='helper-text'>
            {registerPage[locale].text}{' '}
            <Link to='/login'>{registerPage[locale].link}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
