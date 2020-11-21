import React from "react";
import "./style.css";



function PortfolioCard(props) {

    return (

        <div className="card text-warning text-center rounded flex-row">
            <div className="card-body flex">{`${props.name}`}
                <br />
                <a className="link text-info" href={`${props.link}`}>
                <img className="card-img-top" src={props.image} alt={`${props.name}`}/>
                </a>
                
            </div>
        </div>

    );
}

export default PortfolioCard;