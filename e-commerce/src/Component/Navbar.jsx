import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function Navbar() {
  let userdata1 = JSON.parse(localStorage.getItem("userdata")) || [];
  const [data, setData] = useState(userdata1.length);
  useEffect(() => {
    setData(userdata1.length);
  }, [userdata1]);

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };
  return (
    <>
      <div>
        <nav>
          <h4 style={{ color: "#303030", padding: "10px" }}>
            ShopEasy And E-nalanda
          </h4>

          <Select
            className="selectdata"
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
          <ul>
            <li>
              <Link to="/maincontainer" className="contacttext">
                {" "}
                <HomeIcon /> Home
              </Link>
            </li>
            {/* <li>
              <Link to="/aboutpage" className="contacttext">
                <InfoIcon /> About
              </Link>
            </li> */}
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

            <li>
              <Link to="/signuppage" className="contacttext">
                <LoginIcon /> Login
              </Link>
            </li>

            {/* <button onClick={handlechange}>Sign out</button> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
