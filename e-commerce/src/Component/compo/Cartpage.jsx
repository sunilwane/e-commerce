import React, { useContext, useEffect, useState } from "react";
import "./navmiddle.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../../ContextApi/Appcontext";
export default function Cartpage() {
  const [store, setStore] = useState(() => {
    const savedItems = localStorage.getItem("cartData");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(store));
  }, [store]);

  const deleteItem = (itemToDelete) => {
    const updatedItems = store.filter((item, index) => index !== itemToDelete);
    setStore(updatedItems);
    localStorage.setItem("cartData", JSON.stringify(store));
  };
  const [count, setCount] = useState(1);
  const handlecountbtn = (curr) => {
    curr.count += 1;
    // setCount(count);
    setCount(curr.count);
  };
  const [totalprice, setTotalprice] = useState(0);

  const { localstoragevalue } = useContext(ContextApi);
  const storetoken = JSON.parse(localStorage.getItem("tokenno"));

  useEffect(() => {
    const storetemp = store.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        return (previousValue +=
          (currentValue.price ? currentValue.price : 999) * currentValue.count);
      },
      0
    );
    // console.log(storetemp, "message");
    setTotalprice(storetemp);
  }, [count]);

  const handlecountremovebtn = (curr, index) => {
    curr.count -= 1;
    console.log(curr.images.small.url);
    setCount(curr.count);
  };

  // useEffect(() => {}, [count]);
  // useEffect((loca) => {}, [curr.count]);
  const navigate = useNavigate();
  const handleclickbtn = () => {
    storetoken ? navigate("/addresspage") : navigate("/signuppage");
  };

  // Initialize state



  return (
    <div className="cartpage">
      <h1 className="mt-4">Shopping Cart</h1>
      <table className="table1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">REMOVE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">PRODUCT</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">SUBTOTAL</th>
          </tr>
        </thead>
        {store.map((curr, index) => (
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>
                {" "}
                <button
                  onClick={() => deleteItem(index)}
                  className="quntitybtn"
                  style={{ backgroundColor: "red" }}
                >
                  <HighlightOffIcon />
                </button>
              </td>
              <td>
                <img
                  src={curr.images.small.url}
                  // style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </td>
              <td>{curr.title}</td>
              <td>{curr.price ? curr.price : 999}</td>
              <td>
                <button
                  disabled={curr.count <= 1 ? true : false}
                  onClick={() => handlecountremovebtn(curr)}
                  className="quntitybtn"
                >
                  -
                </button>{" "}
                {curr.count}{" "}
                <button
                  onClick={() => handlecountbtn(curr)}
                  className="quntitybtn"
                  style={{ backgroundColor: "rgb(239, 82, 82)" }}
                >
                  +
                </button>
              </td>

              <td className="m-1 p-2">
                <td>{curr.count * (curr.price ? curr.price : 999)}</td>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="mainpart">
        <div className="applyfield">
          <h5>Apply Coupon</h5>
          <form className="d-flex " role="search">
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
        <div className="cartboxprice">
          <h5>Cart Totals</h5>
          <table className="pricetablecart">
            {store.map((curr) => (
              <tr>
                <td>{curr.title}</td>
                <td>{(curr.price ? curr.price : 999) * curr.count}</td>
              </tr>
            ))}
            <tr
              style={{
                fontFamily: "initial",
                fontSize: "20px",
                textDecoration: "bolder",
              }}
            >
              <td>total = </td>
              <td>{totalprice}</td>
            </tr>
          </table>
          {/* <Link to="/addresspage"> */}{" "}
          <button
            type="submit"
            class="btn btn-success mt-3"
            onClick={handleclickbtn}
          >
            Process to Buy
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
