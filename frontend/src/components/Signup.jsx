import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({});
  const [errors, setErrors] = useState({});
  

  const url = "http://localhost:3000/users";

  const navigate = useNavigate();

  const handleSignUpData = (e) => {
    setSignUpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUpPost = (e) => {
    e.preventDefault();
    console.log(signUpData);
    let validationErrors = {};

    if (!signUpData.name || signUpData.name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }
    if (!signUpData.email || !/\S+@\S+\.\S+/.test(signUpData.email)) {
      validationErrors.email = "Please enter a valid email";
    }
    if (!signUpData.password || signUpData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (signUpData.password !== signUpData.cpassword) {
      validationErrors.cpassword = "Passwords do not match";
    }
   
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post('http://localhost:3001/auth/signup', signUpData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      navigate("/");
    }
  };
  return (
    <div className='Login__container'>
      <form className='signUp__box' onSubmit={handleSignUpPost}>
        <input
          type='text'
          name='name'
          className='input'
          placeholder='Enter your name'
          onChange={handleSignUpData}
          required
        />
        {errors.name && <p className='error'>{errors.name}</p>}

        <input
          type='email'
          name='email'
          className='input'
          placeholder='Enter your email'
          onChange={handleSignUpData}
          required
        />
        {errors.email && <p className='error'>{errors.email}</p>}

        <input
          type='password'
          name='password'
          className='input'
          placeholder='Enter your password'
          onChange={handleSignUpData}
          required
        />
        {errors.password && <p className='error'>{errors.password}</p>}

        <input
          type='password'
          name='cpassword'
          className='input'
          placeholder='Confirm your password'
          onChange={handleSignUpData}
          required
        />
        {errors.cpassword && <p className='error'>{errors.cpassword}</p>}

        {/* <input
          type='number'
          name='number'
          className='input'
          placeholder='Enter your number'
          onChange={handleSignUpData}
          required
        />
        {errors.number && <p className='error'>{errors.number}</p>} */}
        <button className='button' type='submit'>Sign Up</button>

        <p className='login'>
          I already  have an account &nbsp;
          <NavLink className='navigate' to='/login'>
            Log in
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;