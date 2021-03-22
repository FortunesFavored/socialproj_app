import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/prompts">All Stories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/myStories">My Stories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/myProfile">My Profile</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}


                {/* <nav className="navbar sticky-top navbar-light bg-light">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light bg-light">
                            <a className="navbar-brand" href="#">
                                <img src="../assets/StoriesIcon.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
                                Home
                            </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/allStories">All Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userprofile">My Profile</Link>
                            </li>
                        </ul>
                        </nav>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        
                        </div>
                    </div>
                </nav> */}