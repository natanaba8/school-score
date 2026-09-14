import { useState } from 'react'
import { initialUsers, initialResults } from './data';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  const [users] = useState(initialUsers);
  const [results] = useState(initialResults);
  const [currentUser, setCurrentUser] = useState(null);

  const {loginForm, setloginForm} = useState({
    username: "",
    password: "",
  });

  const {loginError, setloginError} = useState("");

  function handlelogin(event){
    event.preventDefault();

    const user = users.find(
      (item) =>
        item.username === loginForm.username &&
      item.password === loginForm.password
    );
    if(!user){
      setloginError("incorrect username & password");
      return;
    }
    setCurrentUser(user);
    setloginError("");
  }

  function handlelogout(){
    setCurrentuser(null);
    setloginForm({
      username: "",
      password: "",
    });
  }

  if(!currentUser){
    return(
      <div className="login-page">
        <div className= "login-box">
          <h1>School Results System</h1>

          <form onsubmit={handlelogin}>
            <label>User Name:</label>
            <input
            tyepe="text"
            value={loginForm.username}
            onChange={(e) => setloginForm({...loginForm, 
              username: event.target.value})}required/>

                <label>Passoword:</label>
            <input
            tyepe="text"
            value={loginForm.password}
            onChange={(e) => setloginForm({...loginForm, 
              password: event.target.value})}required/>

              {loginError && <p className="error">{loginError}</p>}
              <button type="submit">login</button>
          </form>

          <div className="demo-accounts">
            <h3>Demo Accounts</h3>
            <p>Admin: username: Admin, password: abc123</p>
            <p>Teacher: username: Teacher, password: abc123</p>
            <p>Student: username: bona, password: abc123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
  
      <Dashboard 
      
      currentUser={currentUser}
      users={users}
      setUsers={setUsers}
      results={results}
      setResults={setResults}
      onLogout={handlelogout}
       />
  )
}

export default App
