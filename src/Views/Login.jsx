/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { Container } from '@material-ui/core';
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
      <Container maxWidth="md">
        <form action="" className="form-login" onSubmit={loginSubmit}>
          <div className="content-logo">
            <img className="logo-image" src={logoQuick} alt="Logo de Quick value" />
            <p className="alg-center">Inicia Sesión</p>
          </div>

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
          <div className="container-form">
            <label htmlFor="email">
              <p>Correo</p>
              <input
                className="input-form"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>

              <input
                className="input-form"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="passsword"
                placeholder="password"
              />
            </label>
            <button type="submit" className="login-button">
              Ingresar
            </button>
            <a href="#">Olvidé mi contraseña</a>
          </div>
        </form>
      </Container>
    </main>
  );
};

export default Login;
