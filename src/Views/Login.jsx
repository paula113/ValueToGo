import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
import './Login.scss';
import { signIn } from '../API/auth';

const Login = () => {
  const history = useHistory();
  const [view, setView] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [empresas, setEmpresas] = React.useState('EUR');
  const handleChange = (event) => {
    setEmpresas(event.target.value);
  };

  const empresa = [
    {
      value: 'EmpresaA',
      label: 'Empresa A',
    },
    {
      value: 'EmpresaB',
      label: 'Empresa B',
    },
    {
      value: 'EmpresaC',
      label: 'Empresa C',
    },
  ];

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

        <TextField
          id="standard-select-currency"
          select
          label="Empresa"
          value={empresas}
          onChange={handleChange}
          helperText="Seleciona Empresa"
        >
          {empresa.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          onChange={}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="passsword"
          placeholder="Password"
        /> */}
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
