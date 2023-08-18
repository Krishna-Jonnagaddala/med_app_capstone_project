import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import './Login.css';


const Login = () => {
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState('');

  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  let loginRoleText = '';
  if (!!role && role === "doctor")
    loginRoleText = 'Login as a Doctor';
  else if (!!role && role === "patient")
    loginRoleText = 'Login as a Patient';
    const navigate = useNavigate();
    useEffect(() => {
      if (sessionStorage.getItem("auth-token")) {
        navigate("/")
      }
  },[]);
  const login = async (e) => {
    
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({            
            email: email,
            password: password,
        }),
    });
    const json = await res.json();
    console.log("json", json);
    if (json.token) {
        sessionStorage.setItem('auth-token', json.token);        
        sessionStorage.setItem('email', json.user.email);
        sessionStorage.setItem('name', json.user.name);
        sessionStorage.setItem("phone", json.user.phone);
        // Redirect to home page
        navigate('/');
        window.location.reload()
    }
    else {
        if (json.errors) {
            for (const error of json.errors) {
                console.error(error.msg);
            }
        }
        else {
            console.error(json.error);
        }
    }
};

  return (
        <div>
          <div className="container">
            <div className="login-grid">
              <div className="login-text">
                <h2>Login</h2>
               
              </div>
              <div className="login-text" class="middle">
                    Are you New Member? <span ><Link to="/signup" style={{color:'#2190FF'}}> Signup Here</Link></span>
              </div>  
              <div className="login-form">
                <form onSubmit={login}>
                  <div className="form-group">
                    
                    
                  </div>                  
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                  <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordVisible ? 'text' : 'password'} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        <div className="password-visibility" onClick={togglePasswordVisibility}>
                            <i class={passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                        </div>  
                    </div>
                  
                  <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                  </div>
                  <div>
                    <h6 className='forgot'>Forgot Password?</h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login