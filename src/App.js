import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/home/Home";
import Reset from "./components/frontend/auth/Reset";
import './components/frontend/home/Home.css'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
            </Routes>
        </Router>
    );
}

export default App;