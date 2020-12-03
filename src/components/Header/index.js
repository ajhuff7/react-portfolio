import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
    return (
        <div className="container flex" id="header">
            <div className="row align-items-end">
                <div className="col-6 col-sm-3">
                    <Link to="/">
                        <img className="item img-thumbnail" src="assets/AJ2.png" alt="AJ Huff"></img>
                    </Link>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <Link className="h5 link text-warning" to="/">ABOUT</Link>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <Link className="h5 link text-warning" to="/Portfolio">PORTFOLIO</Link>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <Link className="h5 link text-warning" to="/Contact">CONTACT</Link>
                </div>
            </div>
        </div>

    );
}

export default Header;