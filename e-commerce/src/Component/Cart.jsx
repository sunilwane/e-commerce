import React from "react";
import Format from "./Format.jsx/Format";

export default function Cart() {
  let userdata = JSON.parse(localStorage.getItem("userdata")) || [];
  return (
    <>
      <h1 className="mt-4">Cart Data</h1>
      <div className="containe">
        {userdata.map((data) => (
          <Format
            structure={false}
            key={data.id}
            id={data.id}
            brand={data.brand}
            img={data.img}
            details={data.details}
            category={data.category}
            price={data.price}
          />
        ))}
      </div>
    </>
  );
}
