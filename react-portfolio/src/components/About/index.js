import React from "react";
import "./style.css";



function About(props) {

    return (
        <div class="card text-warning text-center rounded"  id="about">
            <div className="card-body">
                
                    <h4 class="card-subtitle mb-2 text-light">AJ Huff is an ambitious Front End Developer with an interest in UX/UI design who hopes
                    to bring a creative
                    problem
                    solving approach to desiging products and experiences. Innovative self-starter with
                    experience
                    building responsive websites. Proficient in HTML, CSS, jQuery, JavaScript
                    and
                    Node.js;
                    plus modern libraries and frameworks. Creative thinker who believes adaptability is key.
                    Passionate
                            about collaborating closely with a team to support projects during all phases of delivery.</h4>
                    <br />
                    <h4 class="card-subtitle mb-2 text-light">AJ lives in San Francisco, California and is the author of the Medium blog, "Code Black Boy".</h4>
                    <br />

                    <button className="button text-warning btn-dark">X</button>
     
            </div>
        </div>
    );
}

export default About;