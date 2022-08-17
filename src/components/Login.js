import { useState } from "react";

const Login = ({login, error}) => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
		login(credentials)
  };

  return (
    <div className="login">
			<h2>Please Enter your credentials</h2>
			<h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          required
          value={credentials.name}
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
        />
        <label>Password</label>
        <input
          type="text"
          required
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
