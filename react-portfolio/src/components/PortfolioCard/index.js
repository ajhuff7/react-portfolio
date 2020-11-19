import React from "react";
import "./style.css";



function PortfolioCard(props) {

    return (

        <div class="card text-warning text-center rounded" id="PortfolioCard">
            <div class="card-body" id="titles">
                <div className="card-header">{`${props.name}`}</div>
                <br />
                <img class="card-img-top" src={props.image} alt={`${props.name}`}></img>
                <br />
                <a className="link text-info" href={`${props.link}`}>CLICK ME</a>
            </div>
        </div>

    );
}

export default PortfolioCard;