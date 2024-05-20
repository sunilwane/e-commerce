import React, { useEffect, useState } from "react";
import "./navmiddle.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export default function Cartpage() {
  const [store, setStore] = useState(() => {
    const savedItems = localStorage.getItem("cartData");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    const storetemp = store.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue.price;
      },
      0
    );
    console.log(storetemp, "message");
    setTotalprice(storetemp);
  }, [store]);
  console.log(totalprice, "total proce");
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(store));
  }, [store]);
  console.log(store);
  const deleteItem = (itemToDelete) => {
    const updatedItems = store.filter((item, index) => index !== itemToDelete);
    setStore(updatedItems);
    localStorage.setItem("cartData", JSON.stringify(store));
  };
  const [count, setCount] = useState(1);
  return (
    <div className="cartpage">
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
                <button onClick={() => deleteItem(index)}>
                  <HighlightOffIcon />
                </button>
              </td>
              <td>
                <img src={curr.images} alt="" />
              </td>
              <td>{curr.title}</td>
              <td>{curr.price}</td>
              <td>
                <button
                  disabled={count <= 1 ? true : false}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>{" "}
                {count} <button onClick={() => setCount(count + 1)}>+</button>
              </td>

              <td className="m-1 p-2">
                <td>{curr.price}</td>
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
                <td>{curr.price}</td>
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

          <button type="submit" class="btn btn-success mt-3">
            Checkout Process
          </button>
        </div>
      </div>
    </div>
  );
}
