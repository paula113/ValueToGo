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
        return signIn(email, password)
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            return history.push('/gerente');
          })
          .catch((err) => console.log(err));

      case 'client':
        return signIn(email, password)
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            return history.push('/client');
          })
          .catch((err) => console.log(err));
      default:
    }
  };

  return (
    <main>
      <form
        action=""
        className=""
        onSubmit={(event) => loginSubmit(event)}
      >
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
