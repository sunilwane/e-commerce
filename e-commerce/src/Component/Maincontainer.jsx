import React, { useEffect, useState } from "react";
import Format from "./Format.jsx/Format";
import productdata from "./image/products.json";
import bookslist from "./image/book4.json";
import "./Maincontainer.css";
import { Link } from "react-router-dom";
import Details from "./Details";
export default function Maincontainer() {
  const [mydata, setMydata] = useState([]);
  const [page, setPage] = useState(100);
  const getdata = (url) => {
    return fetch(url)
      .then((res) => res.json())

      .catch((err) => {
        console.log(err);
      });
  };
  console.log(productdata[1]["label"]);
  useEffect(() => {
    data();
    console.log(Date.now());
  }, []);
  const data = async () => {
    let fetchdata = await getdata(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"
    );

    // console.log(fetchdata, "   fetch data");
    setMydata(fetchdata.data);
    console.log(mydata);
  };
  console.log(productdata + "data ");
  const [datatemp, setDatatemp] = useState(false);
  const [store, setStore] = useState(datatemp ? productdata : bookslist);

  const handlebooks = () => {
    setDatatemp(!datatemp);
    setStore(datatemp ? bookslist : productdata);
  };
  // setStore(productdata);

  return (
    <>
      <div className="mainpagevalue">
        <button
          className=" booklist"
          style={{ marginRight: "3%" }}
          onClick={handlebooks}
        >
          {datatemp ? "Books List" : "Video Game"}
        </button>
        <div className="containe mt-4">
          {/* <button onClick={handlechange}>filter by books</button> */}
          {/* {mydata.map((data) => (
          <Format
            structure={true}
            key={data.id}
            id={data.id}
            brand={data.brand}
            img={data.img}
            details={data.details}
            category={data.category}
            price={data.price}
          />
        ))} */}

          {store.map((curr, index) => (
            <div
              style={{
                // border: "1px solid black",
                margin: "10px",
                padding: "10px",
                borderRadius: "9px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <h3>{curr.brand}</h3>
              <img src={curr.images.medium.url} alt="" />
              <p>{curr.productgroup}</p>
              <h5>{curr.title}</h5>
              <h4> price- {curr.price ? curr.price : 999}</h4>

              <div className="btncard">
                <button className="addbtn">add cart</button>
                <Link
                  to={datatemp ? `/details/${index}` : `/details2/${index}`}
                  storedata={datatemp}
                >
                  <button
                    className="buybtn"
                    // onClick={handledetails}
                    // dataall={curr}
                    // onClick={}
                  >
                    Buy
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* 
          <div className="btn">
            <button onClick={() => setPage(page + 100)}>increment</button>
            <span> {page}</span>
            <button
              onClick={() => setPage(page - 100)}
              style={{ marginLeft: "10px" }}
            >
              decrement
            </button>
          </div> */}
      </div>
    </>
  );
}
