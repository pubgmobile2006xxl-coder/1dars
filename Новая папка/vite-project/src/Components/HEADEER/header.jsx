import "./header.scss";
import React from 'react';
function header() {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <img src="INSURE.png" alt="rasm" />
                    <ul>
                        <li><a href="#">HOW WE WORK</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">ACCOUNT</a></li>
                        <button>VIEW PLANS</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HEADER;