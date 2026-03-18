import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api';
import "./Login.css";

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const { login, logout, isAuthenticated } = useAuth(); // ← add logout and isAuthenticated
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post('/auth/login', form);
            login(res.data.token);
            navigate('/');
        }catch(err) {
            console.error(err);
            alert(err.response?.data?.msg || "Invalid Credentials")
        };
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return(
        <div className="login">
            {isAuthenticated ? (
                <>
                    <h2>You are logged in</h2>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </>
            )}
        </div>
    );
};

export default Login;