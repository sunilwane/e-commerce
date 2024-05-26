import React, { useEffect, useState } from "react";
import { database } from "./FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Maincontainer from "./Maincontainer";
import Cart from "./Cart";
import Navmiddle from "./compo/Navmiddle";
export default function Navbar() {
  let userdata1 = JSON.parse(localStorage.getItem("userdata")) || [];
  const [data, setData] = useState(userdata1.length);
  useEffect(() => {
    setData(userdata1.length);
  }, [userdata1]);

  const history = useNavigate();
  const handlechange = () => {
    signOut(database).then((val) => {
      history("/");
    });
  };
  const handlecart = () => {
    // setContainer(!container);
    // setCart(!cart);
    history("/maincontainer");
  };

  return (
    <>
      <div>
        <nav>
          <h4 style={{ color: "#303030", padding: "10px" }}>
            ShopEasy And E-nalanda
          </h4>
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
              <Link to="/contactpage" className="contacttext">
                <LocalPostOfficeIcon /> Contact
              </Link>
            </li>
            <li>
              <Link to="/cartpage" className="contacttext">
                <ShoppingCartIcon />
                {/* <span className="actualdata"> {data}</span> */}
                Cart
              </Link>
            </li>

            {/* <button onClick={handlechange}>Sign out</button> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
