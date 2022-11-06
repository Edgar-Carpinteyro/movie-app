import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <header>
    <div class="left">
        <a>Stand-Up Comedy!</a>
    </div>
    <div class="mid">
        <ul class="navbar">
            <li>
                <Link to="/">Gabriel Iglesias</Link>
            </li>
            <li>
                <Link to="/jo">Jo Koy</Link>
            </li>
            <li>
                <Link to="/iliza">Iliza Shlesinger</Link>
            </li>
            <li>
                <Link to="/hasan">Hasan Minhaj</Link>
            </li>
        </ul>
    </div>
        <div class="right">
            <a>Welcome</a>
        </div>
  </header>
  );
}
export default Navbar;