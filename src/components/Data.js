import React from "react";
import image1 from "../asssets/01.jpg";
import image2 from "../asssets/02.jpg";
import image3 from "../asssets/03.jpg";

const Data = [
  {
   
    title: "Rainbow Vegetable Sandwich",
    time: "Time: 15 - 20 Minutes | Serves: 1",
    cost: "$10.50",
    img: (
      <div>
        <img src={image1} alt="" />
      </div>
    ),
  },
  {
   
    title: "Vegetarian Burger",
    time: "Time: 30 - 45 Minutes | Serves: 1",
    cost: "$9.20",
    img: (
      <div>
        <img src={image2} alt="" />
      </div>
    ),
  },
  {

    title: "Raspberry Stuffed French Toast",
    time: "Time: 10 - 15 Minutes | Serves: 1",
    cost: "$12.50 ",
    img: (
      <div>
        <img src={image3} alt="" />
      </div>
    ),
  },
];
export default Data;
