import React from "react";
import "./style.css";



function ContactModal(props) {

    return (

        <div className="card text-warning text-center rounded" id="contactmodal">
            <div className="card-body">
                <h3 className="card-title">Contact</h3>
                <br />
                <h4 className="card-subtitle mb-2 text-muted">ajhuff7@gmail.com</h4>
                <h4 className="card-subtitle mb-2 text-muted">619.518.5064</h4>
                <br />
                <br />
                <a className="h5 text-info" href="https://github.com/ajhuff7">GitHub Repository </a>
                <br />
                <br />
                <a className="h5 text-info" href="https://www.linkedin.com/in/aj-huff-7696b14b/">LinkedIn</a>
                <br />
                <br />
                <a className="h5 text-info" href="https://codeblackboy.medium.com/">Code Black Boy</a>
                <br />
            </div>
        </div>


    );
}

export default ContactModal;