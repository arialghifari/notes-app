import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';
import { loginPage } from '../utils/content';

function LoginPage() {
  const navigate = useNavigate();
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { locale } = useContext(LocaleContext);

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
        <h2 className='page__top__title mb'>{loginPage[locale].title}</h2>

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
            <button type='submit'>{loginPage[locale].button}</button>
          </form>

          <p className='helper-text'>
            {loginPage[locale].text} <Link to='/register'>{loginPage[locale].link}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
