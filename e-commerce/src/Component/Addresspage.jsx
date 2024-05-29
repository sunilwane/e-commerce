import { Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Select from "react-select";
import "./Addresspage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const navgate = useNavigate();
  const url = "http://localhost:8083/orderuser/orderConfirm";
  const handleclick = () => {
    console.log(userdata);
    const tokenvalue = JSON.parse(localStorage.getItem("tokenno"));
    console.log(tokenvalue);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Barrer ${tokenvalue}`,
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: ` has been added to your cart.`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navgate("/confirmpage");
      })
      .catch((Err) => {
        console.log(Err);
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

          <button onClick={handleclick}>Order confirm</button>
        </div>
        <div className="addpart2"></div>
      </div>
    </div>
  );
}
