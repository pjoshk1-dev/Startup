const Login = () => (
    <div>
      <h2>Login to save data and connect</h2>
        <form method="get" action="play.html">
          <div>
            <input class="field" type="text" placeholder="username" />
          </div>
          <div>
            <input class="field" type="password" placeholder="password" />
          </div>
          <button class="field" type="submit">Login</button>
          <button class="field" type="submit">Create</button>
        </form>
    </div>
);

export default Login;