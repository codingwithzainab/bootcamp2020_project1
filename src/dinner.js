import React from "react";


function Dinner(props) {
    return(
        <div>
            <h1>Today is a servicing  {props.dishName}</h1>
            <h1>Today is a servicing a sweet {props.sweetDish}</h1>

        </div>
    )
}
export default Dinner;