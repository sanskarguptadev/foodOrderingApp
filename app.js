import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/ODUJEJ0.jpg';
import { resList } from './data';

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

const RestuarntCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, deliveryTime, avgRating} = resData?.data
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(res => {
                        return (
                            <RestuarntCard key={res.data.id} resData={res} />
                        )
                    })
                }
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