import { useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const [form, setForm] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post('/auth/register', form);
            console.log(res);
            alert(res.data?.msg || "Success");
        }catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || "Something went wrong");
        }
    };

    return(
        <div className="register">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default Register;