import React, { useState } from "react";
import "./Format.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Format(props) {
  const [orignaldata, setOriginal] = useState();
  const [cartdata, setCartdata] = useState();
  const [detailpage, setDetailspage] = useState(false);
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

  const handleclick = () => {
    setDetailspage(!detailpage);
  };
  return (
    <div className="containe">
      {/* <div className="child">
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
            </button>{" "}
            <Link to={`/details/${props.id}`}>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleclick}
              >
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
