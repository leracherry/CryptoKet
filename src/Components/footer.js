import React from 'react';
import "../index.css";

function Footer() {
  return (
   <div className="Footer">
       <div className="footerStyle">
           <p className="logoNameFooter">CryptoKet</p>
           <div className="footerStyle2">
            <input type="text"  placeholder="Your Email" className="footerSearch"></input>
            <button className="btnFooter">Email Me !</button>
           </div>
       </div>
     </div>

  );
}

export default Footer;