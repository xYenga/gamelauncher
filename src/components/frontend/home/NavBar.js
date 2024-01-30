import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import {appWindow, LogicalSize} from "@tauri-apps/api/window";
import Loader from "../../LessImportantShit/Loader";

const NavBar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);

        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 7000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Logout submitted');

        setTimeout(async () => {
            // Simulate hiding window and adjusting window size
            console.log('Window hidden');

            try {
                console.log('Attempting to resize window');

                const size = new LogicalSize(400, 600);
                await appWindow.setSize(size);
                await appWindow.setResizable(false)
                await appWindow.center();

                console.log('Window adjustments done, showing window');
                console.log('Login successful, navigating to Login');
                navigate('/');

                setTimeout(() => {
                    // Simulate showing the window
                    console.log('Window shown');
                }, 500);
            } catch (error) {
                console.error('Error during logout process:', error);
            } finally {
                setIsLoading(false);
            }
        }, 2500);
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <Loader isLoading={isLoading}/>
            </div>
        );
    }

    return (
        <nav className="navbar">
            <button className={'nav-btn'}>Home</button>
            <button className={'nav-btn'}>Games</button>
            <button className={'nav-btn'}>Store</button>
            <button className={'nav-btn'}>News</button>
            <button className={'logout-btn'} onClick={handleLogout}>
                <img src={`${process.env.PUBLIC_URL}/Images/logout-icon-2048x2046-yqonjwjv.png`} alt="Logout"/>
            </button>
        </nav>
    );
};

export default NavBar;