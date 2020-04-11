import React, {Component} from 'react';

import {Link} from "react-router-dom";

class AppNavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            ClientPanel
                        </Link>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navMain">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navMain">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <Link to="/"  className="nav-link">DashBoard</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/"  className="nav-link">Link 2</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AppNavBar;