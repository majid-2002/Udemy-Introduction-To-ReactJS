import React from "react";


function Footer(){
    let currentDate = new Date().getFullYear();

    return <div>
        <footer>
            <p>copyright {currentDate}</p>
        </footer>
    </div>
}


export default Footer;