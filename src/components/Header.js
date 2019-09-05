import React from "react";

const Header = (props) => (
    <div className="container-fluid header">
        <div className="row">
            <div className="col-sm">
                <h1><strong>Clicky Game</strong></h1>
            </div>
            <div className="col-sm" id="updates">
                <span className="update">{props.message}</span>
            </div>
            <div className="col-sm">
                <span>Score: </span> 
                <span className="score">{props.score}</span>
                <span> | Top: </span>
                <span className="topScore">{props.topScore}</span>
            </div>
        </div>
    </div>
)

export default Header;