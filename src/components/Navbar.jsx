import React from "react";

function Navbar(){
    return(
        <div>
            <nav className="bg-cyan-600 flex justify-between">
                <ul className="bg-cyan-600 flex justify-items-center">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contacts</li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar