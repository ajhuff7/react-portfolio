import React from "react";
import "./style.css";



function PortfolioCard(props) {

    return (

        <div className="card text-warning text-center rounded">
            <div className="card-body">
                <div className="card-header">{`${props.name}`}</div>
                <br />
                <img className="card-img-top" src={props.image} alt={`${props.name}`}/>
                <br />
                <a className="link text-info" href={`${props.link}`}>CLICK ME</a>
            </div>
        </div>

    );
}

export default PortfolioCard;