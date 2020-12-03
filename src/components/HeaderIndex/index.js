import React from "react";
import { Link } from "react-router-dom"; 
import "./style.css";


function HeaderIndex() {
    return (
        <div className="col-6 col-sm-3">
            <Link to="/Home">
                <img className="item img-thumbnail" src="../../assets/AJ2.png" id="logo" alt="AJ Huff"></img>
            </Link>
        </div>

    );
}

export default HeaderIndex;

