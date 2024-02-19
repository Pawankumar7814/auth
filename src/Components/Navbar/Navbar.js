import { useState, useEffect } from "react";

function Navbar(props) {
    // Declaring the variable in react
    const [text,setText] = useState("This is navigation bar's Variable");

    setTimeout(()=>{
        setText("This is new navigation Bar which is changed");
    },3000);
    useEffect(function(){
            console.log("The text has been changed");
    },[text]);
    return (
        <div className="App" >
            {/* This is Navigation Bar's Component
            <h1>{props.list}</h1> */}
            {text}
        </div>
    );
}

export default Navbar;