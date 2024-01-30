import React, {useState} from "react";
import './Reset.css';
import {Link, useNavigate} from "react-router-dom";
import Loading from "../../LessImportantShit/Loader";

function Reset() {
    const [isLoading, setIsLoading] = useState(false);
    const [resetOption, setResetOption] = useState(null);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log('Navigating to /register');
            navigate('/');
        }, 1000);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleOptionChange = (e) => {
        setResetOption(e.target.value);
    };

    return (
        <div className="register-container">
            {isLoading ? (
                <div className="loading-container">
                    <Loading isLoading={isLoading} />
                </div>
            ) : (
                <div className="register">
                    <h1 id='register-title'>Reset</h1>
                    <form action="">
                        <p>What do you want to reset?</p>

                        <div className={'radios'}>
                            <label htmlFor="reset-username">
                                <input
                                    type="radio"
                                    name={'info'}
                                    value={'username'}
                                    onChange={handleOptionChange}
                                    id="reset-username"
                                />
                                Username
                            </label>
                            <label htmlFor="reset-password">
                                <input
                                    type="radio"
                                    name={'info'}
                                    value={'password'}
                                    onChange={handleOptionChange}
                                    id="reset-password"
                                />
                                Password
                            </label>
                        </div>

                        <div className={'email'}>
                            <input
                                className={'email-inp'}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <Link to={''} id={'reset-btn'}>
                            <button className={'reset-now'} type="submit">Reset</button>
                        </Link>
                        <p className="login-link">
                            Already have an account? <span> </span>
                            <span onClick={handleNavigateToLogin} id={'l-link'}>Back to login</span>
                        </p>
                    </form>
                </div>
            )};
        </div>
    );
}

export default Reset;
