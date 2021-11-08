import React from 'react';
import PropTypes from 'prop-types';
import "../index.css";


function Nft({bids, index}) {

    return (
     <div className="Nft">
        <div className="boxNft">
            <div className="box2Nft">
              <span>
                  <img src={bids.picture} className="nftImg"/>
                  <div className="box4text">
                    <strong>{bids.title}</strong> <br/>
                    <strong className="box5text">{bids.coast+'ETH'}</strong>
                  </div>
              </span>
            </div>
        </div>
    </div>
    );
  }

    Nft.propTypes = {
    bids: PropTypes.object.isRequired,
    index: PropTypes.number
  }
  
  export default Nft;