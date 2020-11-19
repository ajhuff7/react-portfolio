import React from "react";
import "./style.css";



function AboutMe(props) {

    return (
        <div className="modal" id="bio">
            <div className="modal-content is-info is-outlined is-rounded">
                <div className="modal-background">
                    <div className="modal-card">
                        <section className="modal-card-body">
                            <h2>AJ Huff is an ambitious Front End Developer with an interest in UX/UI design who hopes
                            to bring a creative
                            problem
                            solving approach to desiging products and experiences. Innovative self-starter with
                            experience
                            building responsive websites. Proficient in HTML, CSS, jQuery, JavaScript
                            and
                            Node.js;
                            plus modern libraries and frameworks. Creative thinker who believes adaptability is key.
                            Passionate
                            about collaborating closely with a team to support projects during all phases of delivery.</h2>
                            <br />
                            <h3>AJ lives in San Francisco, California and is the author of the Medium blog, "Code Black
                            Boy".</h3>
                            <br />

                            <button className="button is-dark is-outlined is-small is-rounded" id="closeBio">X</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;