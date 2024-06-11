



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Superadmin from './Superadmin';
import Profile from './Profile';
import { useAuth } from "./Auth";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const auth = useAuth();
  useEffect(() => {
    // Check for user data in local storage
    const storedUser = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3001/auth/signin';
    const data = { email, password };
      axios.post(url,data)
      .then(res=>{
        console.log("backend details",res)
        auth.login(res.data.user.name,res.data.user._id)
         
       setUser(res.data.user);
        localStorage.setItem('isLoggedIn', 'true'); 
      }).catch(err=>console.log(err))
  }

  const toggleForm = () => {
    setError('');
    setSuccess('');
  };
  if (user) {
    return (
      <div>
        <div className={user.userType === 'Admin' ? "admin-page" : "user-page"}>
          <h1>Welcome {user.userType === 'Admin' ? 'Admin, ' : ''}{user.name}</h1>
          {user.userType === 'Admin' ? <Superadmin/> : <Profile/>}
        </div>
      </div>
    );
  }
  

  return (
    <div>
      <div className='Login__container'>
        <form className="login__box" onSubmit={handleSubmit}>
          <h1>{'Login'}</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <div className="form-group">
            <button type='submit'>{'Login'}</button>
          </div>
          <div className="form-group">
            <button type='button' onClick={toggleForm}>
             
            </button>
            <p className='login'>
          I Don't have an account &nbsp;
          <NavLink className='navigate' to='/signUp'>
            Sign up ?
          </NavLink>
        </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;