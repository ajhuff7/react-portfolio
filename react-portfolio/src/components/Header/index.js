import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
    return (
        <div className="container" id="header">
            <div className="row">
                <div className="col-3">
                    <Link to="/">
                        <img className="item img-thumbnail" src="assets/AJ2.png" alt="AJ Huff"></img>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link className="h5 link text-warning" to="/">ABOUT</Link>
                </div>
                <div className="col-3 text-center">
                    <Link className="h5 link text-warning" to="/Portfolio">PORTFOLIO</Link>
                </div>
                <div className="col-3 text-center">
                    <Link className="h5 link text-warning" to="/Contact">CONTACT</Link>
                </div>
            </div>
        </div>

    );
}

export default Header;