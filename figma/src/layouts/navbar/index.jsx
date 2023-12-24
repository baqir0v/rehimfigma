import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <div className="container">
                    <div className="navbox">
                        <div className="navleft">
                            <h2>Exclusive</h2>
                            <ul className="navul">
                                <li><NavLink activeClassName="navlink" to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"contact"}>Contact</NavLink></li>
                                <li><NavLink to={"about"}>About</NavLink></li>
                                <li><NavLink to={"signup"}>Sign Up</NavLink></li>
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
                                <i><NavLink to={"/account"}><CiHeart /></NavLink></i>
                                <i><NavLink to={"/basket"}><IoCartOutline /></NavLink></i>
                                <i><NavLink to={"/wishlist"}><CgProfile /></NavLink></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar