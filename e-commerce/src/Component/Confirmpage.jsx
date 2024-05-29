import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Confirmpage() {
  //________________
  const [store, setStore] = useState(() => {
    const savedItems = localStorage.getItem("cartData");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [productdata, setProductsData] = useState([]);

  // Function to handle data update
  const tokenvalue = JSON.parse(localStorage.getItem("tokenno"));
  const dataall = (store) => {
    const updatedProducts = store.map((item) => ({
      product: item.title,
      price: item.price,
      quantity: item.count,
    })).filter((curr) => {
        fetch("http://localhost:8083/product/addproduct", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Barrer ${tokenvalue}`,
            },
            body: JSON.stringify(curr),
          }).then((res) => {
            console.log(res);
            Swal.fire({
              title: "Success!",
              text: ` has been added to your cart.`,
              icon: "success",
              confirmButtonText: "OK",
            });
          });

    })


    setProductsData(updatedProducts);
    console.log(productdata);
  };

  useEffect(() => {
    dataall(store);
  }, []);
  return (
    <div>
      <div className="confirmapage">
        <h1>Your Order is Confiremed !</h1>
      </div>
    </div>
  );
}
