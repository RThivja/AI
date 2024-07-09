
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Login Successfully") {
          navigate('carousel');
        } else {
          alert(result.data); // Displaying server response
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 w-25'>
        <div className='card-body'>
        <div className='text-center mb-3'>
        <img src="img/logo.jpeg" alt="Logo" className="logo" style={{ width: '100px', height: '100px' }}/>
          </div>
          <h2 className='text-center'>Sign-In</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder='Enter Email' autoComplete='off'
                name='email' className='form-control rounded-0'
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder='Enter Password' name='password'
                className='form-control rounded-0'
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
            {/* <p className='text-center mt-3'>You are agree to our terms and policies</p>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
