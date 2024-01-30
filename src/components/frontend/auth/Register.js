import React, {useState} from "react";
import './Register.css';
import {Link, useNavigate} from "react-router-dom";
import Loading from "../../LessImportantShit/Loader";

function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log('Navigating to /register');
            navigate('/');
        }, 1000);
    };

    const handlePolicyChange = (e) => {
        setPolicyAccepted(e.target.checked);
    };

    const buttonStyles = policyAccepted ?
        { backgroundColor: "transparent", cursor: "pointer" } :
        { backgroundColor: "gray", cursor: "default", width: '100%'};

    return (
        <div className="register-container">
            {isLoading ? (
                <div className="loading-container">
                    <Loading isLoading={isLoading} />
                </div>
            ) : (
            <div className="register">
                <h1 id='register-title'>Register</h1>
                <form action="">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Repeat Password"/>

                    <div className="policy-checkbox">
                        <label id={'label'}>
                            <input
                                type="checkbox"
                                checked={policyAccepted}
                                onChange={handlePolicyChange}
                            />
                            I accept the <a className={'policy-link'} href="/policy">terms and conditions</a>.
                        </label>
                    </div>

                    <Link to={''} id={'register-btn'}>
                        <button className={'register-now'} type="submit" style={buttonStyles} disabled={!policyAccepted}>Register</button>
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

export default Register;
