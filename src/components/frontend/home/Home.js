import React, {useState, useEffect} from "react";
import './Home.css'
import {Link, useNavigate} from "react-router-dom";
import {appWindow, LogicalSize} from "@tauri-apps/api/window";
import Loader from "../../LessImportantShit/Loader";
import {NavBar} from "./NavBar";


function Home() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const  handleLogout = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('logout submitted');

        setTimeout(async () => {
            await appWindow.hide();
            console.log('Window hidden');

            try {
                console.log('Attempting to resize window');
                const size = new LogicalSize(400, 600);

                await appWindow.setSize(size);
                await appWindow.setResizable(false)
                await appWindow.center();


                setTimeout(() => {
                    console.log('Window adjustments done, showing window');
                    console.log('Login successful, navigating to Login');
                    navigate('/');

                    setTimeout(() => {
                        appWindow.show();
                    }, 500);
                }, 2500);
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
                    <NavBar/>
                    <hr/>
                    <button onClick={handleLogout}>Logout</button>
                </div>
        </div>
    );
}
export default Home;
