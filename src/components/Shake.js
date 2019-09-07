import React from "react";

const Shake = (props) => (
    <Shake 
        h={50}
        v={0}
        r={0}
        dur={10}
        int={1}
        max={5}
        fixed={true}
        fixedStop={false}
        freez={false}
        active={props.active}>
    </Shake>
)

export default Shake;