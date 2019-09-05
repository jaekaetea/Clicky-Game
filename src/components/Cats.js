import React from "react";

const Cats = (props) => (
    <img className="cats" src={require(props.src)} id={props.id} state={props.state} alt="cat" onClick={() => props.clicky(props)}/>
)

export default Cats;