import React from "react";
import "./Posts.css";

export default function Posts() {
  return (
 
      <div className="posts-container" id="home">
        <div class="col-md-6 ">
          <h2 className="tajawal-light" >Good food choices are good investments.</h2>
          <p className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <div className="button">
          <button>Order Now</button>
          <button id="second-button">Learn More</button>
          </div>
       
        </div>
        <div class="col-md-6"></div>
      </div>
  
  );
}
