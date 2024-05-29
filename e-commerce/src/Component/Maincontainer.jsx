import React, { useEffect, useState } from "react";
import Format from "./Format.jsx/Format";
// import productdata from "./image/products.json";
import productdata from "./image/productfinallist.json";

import imagebook from "../images/books-7479152_1280.png";
import videoimage from "../images/video01.png";
import bookslist from "./image/Booklistfinal.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCartShopping,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./Maincontainer.css";
import { Link, json } from "react-router-dom";
import CurrencyRupeeTwoToneIcon from "@mui/icons-material/CurrencyRupeeTwoTone";
import Swal from "sweetalert2";
import Details from "./Details";
export default function Maincontainer() {
  const [mydata, setMydata] = useState([]);
  const [page, setPage] = useState(100);
  const [localstoragedata, setLocalstoragedata] = useState(() => {
    const savedItems = localStorage.getItem("cartData");
    return savedItems ? JSON.parse(savedItems) : [];
  });
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
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?id=10`
    );

    // console.log(fetchdata, "   fetch data");
    setMydata(fetchdata.data);
  };

  const [datatemp, setDatatemp] = useState(false);
  const [store, setStore] = useState(datatemp ? productdata : bookslist);
  const [show, setShow] = useState(false);
  const handlebooks = () => {
    setDatatemp(!datatemp);
    setStore(datatemp ? bookslist : productdata);
  };
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(localstoragedata));
  }, [localstoragedata]);
  const handlecartdata = (curr) => {
    const checkout = localstoragedata.filter((val) => {
      return val._id.$oid !== curr._id.$oid ? false : true;
    });
    curr["count"] = 1;
    if (checkout) {
      setLocalstoragedata([...localstoragedata, curr]);
      Swal.fire({
        title: "Success!",
        text: ` has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Fail!",
        text: ` has been nto to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const [fromdataExtract, setDataExtract] = useState(21);
  const [todataextract, setTodataExtract] = useState(0);

  const [pagenumber, setPageNumber] = useState(1);

  const handledcrement = () => {
    setDataExtract(fromdataExtract - 21);
    setTodataExtract(todataextract - 21);
    setPageNumber(pagenumber - 1);
  };

  const handleincrement = () => {
    setDataExtract(fromdataExtract + 21);
    setTodataExtract(todataextract + 21);
    setPageNumber(pagenumber + 1);
    console.log(todataextract, fromdataExtract);
  };

  useEffect(() => {}, [pagenumber]);
  const limitedData = store.slice(todataextract, fromdataExtract);
  console.log(limitedData, " limited data");

  return (
    <>
      <div className="mainpagevalue">
        <div className="navvideogame">
          <div className="demofeatured">
            <button
              className=" booklist  "
              style={{ marginRight: "3%" }}
              onClick={handlebooks}
            >
              {datatemp ? "Books List" : "Video Game"}
            </button>

            <h1>Featured Products</h1>
          </div>
          <div className="demo2">
            <div className="demo2-01">
              <img src={videoimage} alt="" />
              <div style={{ textAlign: "start", marginTop: "4%" }}>
                <h3>Video Games</h3>
                <span>
                  <>1.Wide Selection of Games</> <br />
                  <>1.Merchandise and Collectibles</> <br />
                  <>1.Wide Selection of Games</> <br />
                  <button
                    className="btn btn-success"
                    style={{ margin: "5px", padding: "5%" }}
                  >
                    Visit
                  </button>
                </span>
              </div>
            </div>
            <div className="demo2-02">
              <img src={imagebook} alt="" />
              <div style={{ textAlign: "start", marginTop: "4%" }}>
                <h3>Books</h3>
                <span>
                  <>1.Wide Selection of Games</> <br />
                  <>1.Merchandise and Collectibles</> <br />
                  <>1.Wide Selection of Games</> <br />
                  <button
                    className="btn btn-success"
                    style={{ margin: "5px", padding: "5%" }}
                  >
                    Visit
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="containe mt-4">
          {limitedData.map((curr, index) => (
            <div
              style={{
                // border: "1px solid black",
                margin: "10px",
                padding: "10px",
                borderRadius: "9px",
                backgroundColor: "#fff",
              }}
              className="cardmaincontainer"
            >
              {/* <h3>{curr.brand}</h3> */}
              <div className="boxcontainer">
                <img src={curr.images.medium.url} alt="" />
                <div className="childboxcontainer">
                  <p>{curr.productgroup}</p>
                  <b>{curr.title}</b>
                  <h4 style={{ color: "#088178", marginTop: "20px" }}>
                    <CurrencyRupeeTwoToneIcon />-{" "}
                    {curr.price ? curr.price : 999}
                  </h4>
                </div>
              </div>

              <div className="btncard">
                <button onClick={() => handlecartdata(curr)} className="addbtn">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>

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
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="btn">
          <button
            onClick={handledcrement}
            disabled={pagenumber <= 1 ? true : false}
            className="paginationbtn"
          >
            Prev
          </button>
          {pagenumber}
          <button
            onClick={handleincrement}
            style={{ marginLeft: "10px" }}
            disabled={pagenumber < 8 ? false : true}
            className="paginationbtn"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
