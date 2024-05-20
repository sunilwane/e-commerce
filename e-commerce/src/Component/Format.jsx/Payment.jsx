import React, { useState } from "react";
import "./payment.css";
import { useParams, Link } from "react-router-dom";
import productdata from "../image/products.json";
import axios from "axios";
export default function Payment() {
  const [count, setCount] = useState(1);
  const [userdata, setUserdata] = useState({
    name: "",
    last: "",
    email: "",
    address: "",
    number: "",
  });
  const url = "http://localhost:8083/payment";
  const datasend = async () => {
    await axios
      .post(url, userdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const { id } = useParams();

  const handlechanges = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await datasend();
  };
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
          <form onSubmit={handlesubmit}>
            <input
              onChange={handlechanges}
              type="text"
              name="name"
              placeholder="Name"
              value={userdata.name}
            />
            <input
              onChange={handlechanges}
              type="text"
              name="last"
              placeholder="Last"
              value={userdata.last}
            />
            <input
              onChange={handlechanges}
              type="email"
              name="email"
              placeholder="Email"
              value={userdata.email}
            />
            <input
              onChange={handlechanges}
              type="text"
              name="address"
              placeholder="Address"
              value={userdata.address}
            />
            <input
              onChange={handlechanges}
              type="number"
              name="number"
              placeholder="Mobile No."
              value={userdata.number}
            />
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
