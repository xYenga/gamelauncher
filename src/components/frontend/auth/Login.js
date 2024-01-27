import React, {useState} from "react";
import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {appWindow, LogicalSize} from "@tauri-apps/api/window";
import Loading from '../../LessImportantShit/Loader';
import AccOptions from "./AccOptions";

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Login form submitted');


        setTimeout(async () => {
            try {

                setTimeout(() => appWindow.hide(), 100);
                console.log('Window hidden');

                console.log('Attempting to resize window');
                const size = new LogicalSize(1024, 768);
                await appWindow.setSize(size);
                await appWindow.center();

                console.log('Window shown');

                console.log('Login successful, navigating to /home');

                setTimeout( () => {
                    setTimeout(() => appWindow.show(), 10);
                    navigate('/home');
                }, 5000);
            } catch (error) {
                console.error('Error during login process:', error);
            } finally {
                setIsLoading(false);
            }
        }, 5000);
    };

    const handleNavigateToRegister = () => {
        setIsLoading(true); // Start loading
        setTimeout(() => {
            console.log('Navigating to /register');
            navigate('/register');
        }, 2000);
    };

    return (
        <div className="login-container">
            {isLoading ? (
                <div className="loading-container">
                    <Loading isLoading={isLoading} />
                </div>
            ) : (
                <div className="login">
                    <h1 id='login-title'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <div className="checkbox-container">
                            <input type="checkbox" id="stayLoggedin"/>
                            <label htmlFor="stayLoggedin">Stay logged in</label>
                        </div>
                        <button className='log-btn' type="submit">Log In</button>
                    </form>
                    <p className="register-link">
                        Don't have an account? <span> </span>
                        <span onClick={handleNavigateToRegister} id={'r-link'}>Register here</span>
                    </p>
                    <div className="auth-options">
                        <AccOptions/>
                    </div>
                </div>
            )}
        </div>
    );
    }

    export default Login;
