import React from "react";

const Cats = (props) => (
    <img className="cats" src={props.src} id={props.id} state={props.state} alt="cat" onClick={() => props.clicky(props)}/>
)

export default Cats;