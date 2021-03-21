import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <div className="container-fluid">
                        <nav class="navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#">
                                <img src="../assets/StoriesIcon.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                                Home
                            </a>
                        </nav>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/allStories"></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userprofile"></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myStories">
                                    Shop &nbsp;
                                    <span className="bg-light">Stories count {this.props.chapters.length} |${this.props.sumStories(this.props.Stories)} </span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
