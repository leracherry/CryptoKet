import React from 'react';
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Sellers from "./Components/sellers";
import BidsNfts from "./Components/bidsNfts";
import Footer from "./Components/footer";
import seller1 from './img/seller1.png';
import seller2 from './img/seller2.png';
import seller3 from './img/seller3.png';
import seller4 from './img/seller4.png';
import seller5 from './img/seller5.png';
import nft1 from './img/nft1.png';
import nft2 from './img/nft2.png';
import nft3 from './img/nft3.png';
import nft4 from './img/nft4.png';
import nft5 from './img/nft5.png';
import nft6 from './img/nft6.png';
import nft7 from './img/nft7.png';
import nft8 from './img/nft8.png';


function App() {

  const sellersBox=[
    {id:1, picture: seller1, name: 'Mia Ayana' , money: 5.250 },
    {id:2, picture: seller2, name: 'Rian Leon' , money: 4.932 },
    {id:3, picture: seller3, name: 'Lady Youn' , money: 4.620 },
    {id:4, picture: seller4, name: 'Black glass' , money: 4.125 },
    {id:5, picture: seller5, name: 'Budhiman' , money: 3.921 }
  ]

  const bids=[
    {id:1, picture: nft1 ,title:"Abstract Smoke Red Blue" , coast: 1.25 },
    {id:2, picture: nft2 ,title:"Mountain Landscape" , coast:0.20 },
    {id:3, picture: nft3 ,title:"Paint Color on Wall" , coast:0.01 },
    {id:4, picture: nft4 ,title:"Abstract Patern", coast:0.87 },
    {id:5, picture: nft5 ,title:"White Line Grafiti", coast:0.09 },
    {id:6, picture: nft6 ,title:"Abstract Triangle", coast:0.91 },
    {id:7, picture: nft7 ,title:"Lake Landscape" , coast:0.52 },
    {id:8, picture: nft8 ,title:"Blue Read Art" , coast:0.85 }
  ]

  return (
   <div className="App">
     <Navbar/><hr/>
     <Banner/>
     <h1 className="topSellersTitle">Top Sellers</h1>
     <Sellers sellersBox={sellersBox}/>
     <h1 className="topSellersTitle">Hot Bids</h1>
     <BidsNfts bids={bids}/>
     <span className="btnMore">
        <button className="loadMoreBtn">Load More</button>
     </span>
     <Footer/>
   </div>
  );
}

export default App;
