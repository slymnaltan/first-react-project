import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/App.css";

function Home() {
    return (
        <div className='home'>
            <h1>Welcome to the App</h1>
            <div className="card-container">
                <Link to="/todo" className='card'>
                    <h2>Todo App</h2>
                </Link>
                <Link to="/calculator" className='card'>
                    <h2>Calculator App</h2>
                </Link>
            </div>
        </div>
    )
}

export default Home