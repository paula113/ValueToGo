import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { signIn } from '../API/auth';

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
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            history.push('/gerente');
          })
          .catch((err) => console.log(err));
        break;
      case 'client':
        signIn(email, password)
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            history.push('/client');
          })
          .catch((err) => console.log(err));
        break;
      default:
        return null;
    }
  };
  return (
    <main>
      <form action="" className="" onSubmit={loginSubmit}>
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
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="passsword"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
