import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/ODUJEJ0.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestuarntCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarntCard />
                <RestuarntCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);