import { Radio } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import "./Addresspage.css";
import axios from "axios";
export default function Addresspage() {
  const [userdata, setUserData] = useState({
    name: "",
    number: "",
    address: "",
    city: "",
    landmark: "",
    pincode: "",
    locality: "",
  });
  const url = "http://localhost:8083/orderConfirm";
  const handleclick = () => {
    console.log(userdata);

    axios(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userdata, [name]: value });
  };
  return (
    <div>
      <h1>Delivery Address</h1>
      <div className="addmain">
        <div className="addpart1">
          <input
            onChange={handlechange}
            type="text"
            placeholder="Name"
            name="name"
            value={userdata.name}
          />
          <input
            onChange={handlechange}
            type="number"
            placeholder="number"
            name="number"
            value={userdata.number}
          />
          <input
            onChange={handlechange}
            type="number"
            name="pincode"
            placeholder="pincode"
            value={userdata.pincode}
          />
          <input
            onChange={handlechange}
            type="text"
            placeholder="Locality"
            name="locality"
            value={userdata.locality}
          />
          <input
            onChange={handlechange}
            type="text"
            placeholder="Address"
            name="address"
            value={userdata.address}
          />
          <input
            onChange={handlechange}
            type="text"
            name="city"
            placeholder="city"
            value={userdata.city}
          />

          <input
            type="text"
            onChange={handlechange}
            placeholder="landmark"
            name="landmark"
            value={userdata.landmark}
          />

          <p>Address Type</p>
          <div className="raido">
            <span>
              {" "}
              <input type="radio" /> Home
            </span>
            <span>
              <input type="radio" /> Work
            </span>
          </div>

          <button onClick={handleclick}>Order confirm</button>
        </div>
        <div className="addpart2"></div>
      </div>
    </div>
  );
}
