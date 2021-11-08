import React from 'react';
import PropTypes from 'prop-types';
import "../index.css";


function Topseller({sellersBox, index}) {

    return (
     <div className="Topseller">
        <div className="box">
            <div className="box2">
              <span>
                <div className="numberCircle">{index+1}</div>
                <div className="box3">
                  <img src={sellersBox.picture}/>
                  <div className="box4text">
                    <strong>{sellersBox.name}</strong> <br/>
                    <strong className="box5text">{sellersBox.money+'ETH'}</strong>
                  </div>
                </div>
              </span>
            </div>
        </div>
    </div>
    );
  }

  Topseller.propTypes = {
    sellersBox: PropTypes.object.isRequired,
    index: PropTypes.number
  }
  
  export default Topseller;