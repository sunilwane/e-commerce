import React, { useState } from "react";
import "./payment.css";
import { useParams, Link } from "react-router-dom";
import productdata from "../image/products.json";
export default function Payment() {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  return (
    <div className="" style={{ marginTop: "5%" }}>
      <h1>Payment Cash on Delivery</h1>
      <h3>User Details</h3>
      <div className="cardpayment">
        <div className="partimg">
          <img src={productdata[id].images.medium.url} alt="" />
          <h3>Price- {productdata[id].price * count}</h3>
          <h4> {productdata[id].label}</h4>
        </div>
        <div className="partuserdetails">
          <h4>
            quntity of product{" "}
            <button
              disabled={count <= 1 ? true : false}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>{" "}
            {count} <button onClick={() => setCount(count + 1)}>+</button>
          </h4>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="Last" placeholder="Last" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="address" placeholder="Address" />
            <input type="number" name="Mobile" placeholder="Mobile No." />
            <input type="submit" value="Order" />
            <Link to="/">
              {" "}
              <button className="cle">Cancel</button>
            </Link>
            {/* <input type="submit" value="cancel" /> */}
            {/* <input type="text" name="name" placeholder="Name" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}
