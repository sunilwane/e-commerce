import React, { useState } from "react";
import "./Format.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Format(props) {
  const [orignaldata, setOriginal] = useState();
  const [cartdata, setCartdata] = useState();
  // if(structure===true){

  // }


  const handlethecart = (element) => {
    let userdata = JSON.parse(localStorage.getItem("userdata")) || [];
    let isActive = false;

    for (let a = 0; a < userdata.length; a++) {
      if (userdata[a].id === element.id) {
        isActive = true;
      }
    }

    isActive ? alert("already add to the cart") : userdata.push(element);

    localStorage.setItem("userdata", JSON.stringify(userdata));
    console.log(props);
  };
  return (
    <div className="containe">
      <div className="child">
        <img src={props.img} alt="" />
        <div className="div">
          <h1>{props.brand}</h1>
          <p>{props.details}</p>
          <h4>{props.category}</h4>

          <h3 className="h3"> Price: {props.price}</h3>
          <div className="btns mt-5">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handlethecart(props)}
            >
              <ShoppingCartIcon /> cart
            </button>
            <button type="button" className="btn btn-success">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
