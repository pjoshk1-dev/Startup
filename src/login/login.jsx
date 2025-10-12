import React from 'react';

const Login = () => (
    <div>
      <h2>Login to save data and connect</h2>
        <form method="get" action="play.html">
          <div>
            <input className="field" type="text" placeholder="username" />
          </div>
          <div>
            <input className="field" type="password" placeholder="password" />
          </div>
          <button className="field" type="submit">Login</button>
          <button className="field" type="submit">Create</button>
        </form>
    </div>
);

export default Login;