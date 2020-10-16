import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { signIn } from '../API/auth';
import logoQuick from '../Assets/logo-quick-value.svg';

const Login = () => {
  const history = useHistory();
  const [view, setView] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event) => {
    event.preventDefault();
    switch (view) {
      case 'col-price':
        signIn(email, password)
          .then((res) => {
            localStorage.clear();
            localStorage.setItem('user', email);
            console.log(res);
            history.push('/gerente');
          })
          .catch((err) => console.log(err));
        break;
      case 'client':
        console.log(email);
        console.log(password);
        signIn(email, password)
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            history.push('/cliente/recomendaciones');
          })
          .catch((err) => console.log(err));
        break;
      default:
        return null;
    }
  };
  return (
    <main className="login-main">
      <form action="" className="" onSubmit={loginSubmit}>
        <img className="logo-image" src={logoQuick} alt="Logo de Quick value" />
        <span className="alg-center">Seleccione por favor</span>
        <div className="user-role">
          <button
            className="user-button"
            type="button"
            onClick={() => setView('col-price')}
          >
            Price
          </button>
          <button
            className="user-button"
            type="button"
            onClick={() => setView('client')}
          >
            Cliente
          </button>
        </div>
        <div className="container-input-form">
          <label htmlFor="email">Correo electrónico</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="ejemplo@ejemplo.com"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="passsword"
            placeholder="password"
          />
          <button type="submit" className="Login-button">
            Ingresar
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
