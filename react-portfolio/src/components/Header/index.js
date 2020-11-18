import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-one-quarter has-text-centered">
                    <img className="item img-thumbnail" src="assets/AJ2.png" alt="AJ Huff"></img>
                </div>
                <div className="column is-one-quarter has-text-centered">
                    <h1 className="link has-text-warning" id="about">ABOUT ME</h1>
                    <button className="button is-warning is-small is-outlined is-rounded" id="about">About Me</button>
                </div>
                <div className="column is-one-quarter has-text-centered">
                    <a className="link has-text-warning" href="portfolio.html" id="portfolio">PORTFOLIO</a>
                    <button className="button is-danger is-small is-outlined  is-rounded" id="portfolio">Portfolio</button>
                </div>
                <div className="column is-one-quarter has-text-centered">
                    <h1 className="link has-text-warning" id="contact">CONTACT ME</h1>
                    <button className="button is-danger is-small is-outlined  is-rounded" id="contact">Contact</button>
                </div>
            </div>
        </div>

    );
}

export default Header;