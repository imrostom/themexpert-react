import React from "react";
import { NavLink } from "react-router-dom";

function Menubar() {
  return (
    <div>
        <section className="mainmenu">
            <div className="container">
                <ul>
                    <li>
                        <NavLink exact activeClassName='active' to="/"><i className="fa fa-home"></i> Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  );
}

export default Menubar;
