import React from "react";
import "./style.css";



function PortfolioCard(props) {

    return (

        <div class="card">
            <div className="card-header">{props.name}</div>
            <a className="link" href={props.link}>
                <img class="card-img-overlay img-fluid" src={props.image} alt={props.name}></img>
            </a>
        </div>

    );
}

export default PortfolioCard;