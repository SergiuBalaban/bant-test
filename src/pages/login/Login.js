import './Login.css';
import { useHistory } from "react-router-dom";
import React from "react";

function Login() {
    const history = useHistory();

    const credentials = {
        userEmail: 'user1@test.com',
        userPassword: 'password',
        adminEmail: 'admin@test.com',
        adminPassword: 'password',
    }

    function login() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let list = document.getElementsByClassName("errorMessage")[0];
        localStorage.clear();

        if(credentials.userEmail === email && credentials.userPassword === password) {
            localStorage.setItem('email', email);
            localStorage.setItem('role', 'user');
            history.push('/user/email');
            return;
        }

        if(credentials.adminEmail === email && credentials.adminPassword === password) {
            localStorage.setItem('email', email);
            localStorage.setItem('role', 'admin');
            history.push('/admin/emails');
            return;
        }
        list.style.display = "block";
    }

    return (
        <section className="loginSection">
            <div className="container">
                <div className="loginInputs">
                    <p className="loginText">Email:</p>
                    <input type='email' name="email" id="email" /><br/>
                </div>
                <div className="loginInputs">
                    <p className="loginText">Password:</p>
                    <input type='password' name="password" id="password"/><br/>
                </div>
                <button className="loginBtn" type="button" id="login" onClick={login}>Login</button>
                <p className="errorMessage">Email or password is incorrect</p>
            </div>
        </section>
    );
}

export default Login;
