import React from "react";
import "./style.css";



function Contact(props) {

    return (


        <div class="card text-warning text-center rounded" id="contact">
            <div class="card-body">
                <h3 class="card-title">Contact</h3>
                <br/>
                <h4 class="card-subtitle mb-2 text-muted">ajhuff7@gmail.com</h4>
                <h4 class="card-subtitle mb-2 text-muted">619.518.5064</h4>
                <br/>
                <a class="h5 text-info" href="https://github.com/ajhuff7">GitHub Repository </a>
                <br />
                <br />
                <a class="h5 text-info" href="https://www.linkedin.com/in/aj-huff-7696b14b/">LinkedIn</a>
                <br />
                <br />
                <a class="h5 text-info" href="https://codeblackboy.medium.com/">Code Black Boy</a>
                <br/>
              <br/>
                <button className="button text-warning btn-dark">X</button>
            </div>
        </div>



    );
}

export default Contact;