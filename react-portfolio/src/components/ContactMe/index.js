import React from "react";
import "./style.css";



function ContactMe(props) {

    return (
        <div className="modal" id="contactMe">
            <div className="modal-content is-info is-outlined is-rounded">
                <div className="modal-background">
                    <div className="modal-card has-text-centered">
                        <section className="modal-card-body">
                            <h1>Contact Me: </h1>
                            <br />
                            <h2>ajhuff7@gmail.com</h2>
                            <h2>619.518.5064</h2>
                            <br />
                            <a href="https://github.com/ajhuff7">GitHub Repository</a>
                            <br />
                            <a href="https://www.linkedin.com/in/aj-huff-7696b14b/">LinkedIn</a>
                            <br />
                            <a href="https://codeblackboy.medium.com/">Code Black Boy</a>
                            <br />
                            <br />
                            <br />
                            <button className="button is-dark is-outlined is-small is-rounded" id="closeContact">X</button>
                        </section >
                    </div >
                </div >
            </div >
        </div>

    );
}

export default ContactMe;