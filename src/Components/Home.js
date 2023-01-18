import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="Container">
      <h1>Home Component</h1>
      <div className="mainCartDiv">
        <div className="imgDiv">
          <img
            src="https://m.media-amazon.com/images/I/61l9ppRIiqL._SX679_.jpg"
            alt="img"
          />
        </div>
        <div className="ForPriceAndName">
          <div className="name">I Phone 13</div>
          <div className="price">130000</div>
        </div>
        <div className="btn">
          <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
