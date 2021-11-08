import React from 'react';
import "../index.css";

function Navbar() {
  return (
   <div className="Navbar">
       <div className="leftside">
           <p className="logoName">CryptoKet</p>
           <input type="text"  placeholder="Search Item Here">
           </input>
       </div>
       <div className="rightside">
           <div className="links">
            <a href="/Explore">Explore</a>
            <a href="/MyItems">My Items</a>
            <a href="/Following">Following</a>
            <button className="btnCreate">Create</button>
            <button className="btnConnect">Connect</button>
           </div>
       </div>
     </div>

  );
}

export default Navbar;