import React, {useState, useEffect} from "react";
import './Home.css'
import {Link, useNavigate} from "react-router-dom";
import {appWindow, LogicalSize} from "@tauri-apps/api/window";
import Loader from "../../LessImportantShit/Loader";


function Home() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const  handleLogout = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('logout submitted');

        setTimeout(async () => {
            try {
                setTimeout(() => appWindow.hide(), 1000);
                console.log('Window hidden');

                console.log('Attempting to resize window');
                const size = new LogicalSize(400, 600);
                await appWindow.setSize(size);
                await appWindow.center();

                console.log('Window shown');

                console.log('Logout successful, navigating to /login');

                setTimeout(() => {
                    navigate('/');
                    setTimeout(() => appWindow.show(), 2000);
                }, 2000);
            } catch (error) {
                console.error('Error during login process:', error);
            } finally {
                setIsLoading(false);
            }
        }, 2500);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <Loader isLoading={isLoading}/>
            </div>
        );
    }

    return (
        <div className="home-container">
                <div className="home">
                    <h1 id='home-title'>Homepage</h1>
                    <hr/>
                    <button onClick={handleLogout}>Logout</button>
                </div>
        </div>
    );
}
export default Home;
