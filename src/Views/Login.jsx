import React from "react";
import "./SASS/Login.scss";

function Login() {
  return (
    <main>
      <form action="" className="login-card">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
