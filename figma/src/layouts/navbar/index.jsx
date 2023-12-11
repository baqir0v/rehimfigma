import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <div className="container">
                    <div className="navbox">
                        <div className="navleft">
                            <h2>Exclusive</h2>
                            <ul className="navul">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"contact"}>Contact</Link></li>
                                <li>About</li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                        <div className="navright">
                            <div className="navitems">
                                <div className="input">
                                    <input type="text" placeholder="What Are You Looking For?"
                                    />
                                    <span>
                                        <FaMagnifyingGlass />
                                    </span>
                                </div>
                                <i><CiHeart /></i>
                                <i><IoCartOutline /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar