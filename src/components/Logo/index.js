import React from "react";
import { Link } from "react-router-dom";

function Logo() {

    return (
        <div className="container flex">
            <Link to="/">
                <div className="row align-items-end"></div>

                <div className="col-6 col-sm-3"></div>
            </Link>
        </div>


    );
}

export default Logo;