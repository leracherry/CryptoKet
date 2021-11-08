import React from 'react';
import PropTypes from 'prop-types';
import "../index.css";
import Nft from './nft';

function BidsNfts(props) {

    return (
        
     <div className="BidsNfts">
         <div className="BoxesNft">
             { props.bids.map((bids, index, picture, title, coast) => {
                 return<Nft bids={bids} key={bids.id} index={index} picture={picture} title={title} coast={coast}/>
             })}
         </div>
     </div>
    );
  }

  BidsNfts.propTypes={
    bids:PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  export default BidsNfts;