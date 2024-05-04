import React, { useState } from "react";
import productdata from "./image/products.json";
import bookslist from "./image/book4.json";

import { useParams, Link } from "react-router-dom";
import "./Details.css";
export default function Details(props) {
  const [store, setStore] = useState(productdata);
  const { id } = useParams();
  const getdataurl = (url) => {
    return fetch(url)
      .then((res) => res.json())

      .catch((err) => {
        console.log(err);
      });
  };

  // const getdata = async () => {
  //   const tempa = await getdataurl(
  //     `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
  //   );
  //   setTemp(tempa.data);
  //   console.log(temp, " data ");
  // };
  // getdata();
  return (
    <div style={{ marginTop: "5%" }}>
      {/* <h1>detail's page</h1> */}

      <div className="cardpage">
        <div className="part1img">
          <img src={store[id].images.large.url} alt="" />
          <h2>Product Catagory - {store[id].productgroup}</h2>
        </div>
        <div className="part2details">
          <h4>Brand - {store[id].brand}</h4>

          <h4>category-{store[id].category}</h4>
          <p>{store[id].description}</p>

          <h5>format - {store[id].format}</h5>
          <p> HardWare platform - {store[id].hardwareplatform}</p>
          <h6>Genre - {store[id].genre ? store[id].genre : null}</h6>

          <h2>Publisher - {store[id].publisher}</h2>
          {/* <p>Release Date - {store[id].releasedate.$date}</p> */}
          <h1>Title - {store[id].title}</h1>
          <h4 style={{ color: "red" }}>Price - {store[id].price}</h4>
          <div className="detailbtn">
            <Link to="/">
              <button className="btn btn-danger " style={{ marginTop: "65%" }}>
                cancel
              </button>
            </Link>
            <Link to={`/payment/${id}`}>
              <button className="btn btn-success">buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <h3>hii</h3> */}
    </div>
  );
}
