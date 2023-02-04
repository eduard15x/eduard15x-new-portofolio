import React from "react";
import './homepage.style.scss'

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="intro-text">
                <h1>Hi there, I am Eduard Precup</h1>
                <p>Front-End Developer</p>
            </div>
            <img
                className="intro-image" 
                src="https://images.unsplash.com/photo-1673798856878-77e9494f99e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt="Eduard Precup" 
                title="Eduard Precup" 
            />
        </div>
    );
};

export default Homepage;
