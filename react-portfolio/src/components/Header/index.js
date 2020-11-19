import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="container" id="header">
            <div className="row">
                <div className="col">
                    <img className="item img-thumbnail" src="assets/AJ2.png" alt="AJ Huff"></img>
                </div>
                <div className="col text-center">
                    <a className="h5 link text-warning" href="/Index" id="bio">ABOUT</a>
                </div>
                <div className="col text-center">
                    <a className="h5 link text-warning" href="/Portfolio" id="portfolio">PORTFOLIO</a>
                </div>
                <div className="col text-center">
                    <a className="h5 link text-warning" href="/Contact" id="contact">CONTACT</a>
                </div>
            </div>
        </div>

    );
}

export default Header;