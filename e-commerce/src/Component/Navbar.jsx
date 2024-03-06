import React, { useEffect, useState } from "react";
import { database } from "./FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Maincontainer from "./Maincontainer";
import Cart from "./Cart";
export default function Navbar() {
  const [cart, setCart] = useState(false);
  const [container, setContainer] = useState(true);
  let userdata1 = JSON.parse(localStorage.getItem("userdata")) || [];
  const [data, setData] = useState(userdata1.length);
  useEffect(() => {
    setData(userdata1.length);
    console.log(Date.now());
  }, [userdata1]);

  const history = useNavigate();
  const handlechange = () => {
    signOut(database).then((val) => {
      history("/");
    });
  };
  const handlecart = () => {
    setContainer(!container);
    setCart(!cart);
  };

  return (
    <div>
      <nav>
        <h1>e-commerce</h1>
        <div className="  mt-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            <button type="submit" class="btn btn-success">
              Search
            </button>
          </form>
        </div>
        <ul>
          <li onClick={handlecart}>
            <HomeIcon /> Home
          </li>
          <li>
            {" "}
            <InfoIcon /> About
          </li>
          <li>
            <LocalPostOfficeIcon /> Contact
          </li>
          <li onClick={handlecart}>
            <span className="cartitemdata">
              {" "}
              <ShoppingCartIcon />
              <span className="actualdata"> {data}</span>
            </span>{" "}
            Cart
          </li>

          <button onClick={handlechange}>Sign out</button>
        </ul>
      </nav>
      {container && <Maincontainer />}
      {cart && <Cart />}
    </div>
  );
}
