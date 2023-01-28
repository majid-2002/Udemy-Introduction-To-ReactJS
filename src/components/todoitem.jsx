import React, {useState} from "react";



function Todoitem(props){

    const [isActive, setIsActive] = useState(false);

    return(
        <li style={{textDecoration : isActive && "line-through"}} onClick={function(){setIsActive(!isActive)}}>{props.listitem}</li>
    )
}


export default Todoitem;


