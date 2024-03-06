import React, { useEffect, useState } from "react";
import Format from "./Format.jsx/Format";

export default function Maincontainer() {
  const [mydata, setMydata] = useState([]);
  const getdata = (url) => {
    return fetch(url)
      .then((res) => res.json())

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
    console.log(Date.now());
  }, []);
  const data = async () => {
    let fetchdata = await getdata(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"
    );

    setMydata(fetchdata.data);
    console.log(mydata);
  };

  return (
    <div>
      <div className="containe">
        {mydata.map((data) => (
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
        ))}
      </div>
    </div>
  );
}
