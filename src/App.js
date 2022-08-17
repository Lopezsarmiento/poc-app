import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const admin = {
	username: 'admin',
	password: 'pass'
}

function App() {
  const [user, setUser] = useState({ name: '', password: ''})
  const [error, setError] = useState(null)

  useEffect(() => {
    const getLoginCredentials = JSON.parse(localStorage.getItem('login'));

    if (getLoginCredentials) {
      setUser(getLoginCredentials)
    }
  }, []);

  const handleLogin = (credentials) => {
    if (credentials.name === admin.username && credentials.password === admin.password) {
      localStorage.setItem('login', JSON.stringify(credentials))
      setUser({
        name: credentials.name,
        password: credentials.password
      })
    } else {
      setError('Incorrect user or password')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    setUser({ name: '', password: ''})
  }

  const isLoggedIn = (user.name === admin.username)


  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Navbar logout={handleLogout}/>}
        <div className="content">
          <Switch>
            {isLoggedIn && (
              <>  
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/pokemon/:name">
                  <Details/>
                </Route>
                <Route path="/favorites">
                  <Favorites/>
                </Route>
              </>
            )}
            {!isLoggedIn && (
              <Login login={handleLogin} error={error}/>
            )}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
