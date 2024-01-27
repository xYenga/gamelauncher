import React from 'react';
import { FaGoogle, FaMicrosoft, FaFacebookF } from 'react-icons/fa';
import './AccOptions.css'

function AccOptions() {
    const handleGoogleAuth = () => {
        console.log('Authenticate with Google');
    };

    const handleMicrosoftAuth = () => {
        console.log('Authenticate with Microsoft');
    };

    const handleFacebookAuth = () => {
        console.log('Authenticate with Facebook');

    };

    return (
        <div className="auth-options">
            <button className="auth-button btn-google" onClick={handleGoogleAuth}>
                <FaGoogle />
            </button>
            <button className="auth-button btn-microsoft" onClick={handleMicrosoftAuth}>
                <FaMicrosoft />
            </button>
            <button className="auth-button btn-facebook" onClick={handleFacebookAuth}>
                <FaFacebookF />
            </button>
        </div>
    );
}

export default AccOptions;
