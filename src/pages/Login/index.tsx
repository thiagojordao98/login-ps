import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './styles.css';
import Logo from './../../assets/logob2bit.png';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate('/');
      } else {
        alert('Não deu certo.');
      }
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">...</span>
            <span className="logo">
              <img id="logo-b2bit" src={Logo} alt="logo b2bit" />
            </span>
            <div className="wrap-input">
              <span className="title-input">E-mail</span>
              <input
                className="input"
                type="email"
                value={email}
                onChange={handleEmailInput}
                placeholder="@gmail.com"
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>
            <div className="wrap-input">
              <span className="title-input">Passoword</span>
              <input
                className="input"
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="***************"
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button
                type="submit"
                className="login-form-btn"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

{
  /* <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />
      <button className="login-form-btn" onClick={handleLogin}>Sign In</button> */
}
