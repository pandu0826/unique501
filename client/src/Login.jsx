
import {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/login', { email, password })
          .then(result => {
           console.log(result);
            if (result.data === "Success") 
            {
              Navigate('/home');
            }
        })
         .catch(error => {
         console.error('Axios Error:', error);
  });

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" style={{ width: '100%', marginLeft: '200px' }}>
            <div className="bg-light p-4 rounded" style={{ width: '500px' }}>
                <h2 className="mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-3">
                        Login
                    </button>
                </form>
                <p className="mb-3 text-center">Already Have an Account</p>
                <Link to="/login" className="btn btn-outline-dark w-100 rounded-0 text-decoration-none">
                    Signup
                </Link>
            </div>
        </div>
    );
}

export default Login;
