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
        // await appWindow.
        setIsLoading(true);
        console.log('Login form submitted');

        setTimeout(async () => {
            await appWindow.hide();
            console.log('Window hidden');

            try {
                console.log('Attempting to resize window');
                const size = new LogicalSize(1024, 768);

                await appWindow.setMinSize(size);

                await appWindow.setSize(size);
                await appWindow.setResizable(true);
                await appWindow.setMaximizable(true);
                await appWindow.center();


                setTimeout(() => {
                    console.log('Window adjustments done, showing window');
                    console.log('Login successful, navigating to Home');
                    navigate('/home');

                    setTimeout(() => {
                        appWindow.show();
                    }, 500);
                }, 2500);
            } catch (error) {
                console.error('Error during login process:', error);
            } finally {
                setIsLoading(false);
            }
        }, 5000);
    };


    const handleNavigateToRegister = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log('Navigating to /register');
            navigate('/register');
        }, 2000);
    };


    const handleNavigateToReset = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log('Navigating to /register');
            navigate('/reset');
        }, 1500);
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
                        <button className='login-btn' type="submit">Log In</button>
                    </form>
                    <p className="register-link">
                        Don't have an account? <span> </span>
                        <span onClick={handleNavigateToRegister} id={'r-link'}>Register here</span>
                    </p>
                    <p className="register-link">
                        <span onClick={handleNavigateToReset} id={'r-link'}>Forgot password?</span>
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
