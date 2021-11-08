import React from 'react';
import PropTypes from 'prop-types';
import "../index.css";
import Topseller from "./topseller";

function Sellers(props) {

    return (
        
     <div className="Sellers">
         <div className="Boxes">
             { props.sellersBox.map((sellersBox, index, picture, name, money) => {
                 return<Topseller sellersBox={sellersBox} key={sellersBox.id} index={index} picture={picture} name={name} money={money}/>
             })}
         </div>
     </div>
    );
  }

  Sellers.propTypes={
      sellersBox:PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  export default Sellers;