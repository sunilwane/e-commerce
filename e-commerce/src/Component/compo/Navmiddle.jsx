import React from "react";
import "./navmiddle.css";
import imagepath from "../../images/backgroundimage.jpg";
import manimage from "../../images/manimage.jpg";
export default function Navmiddle() {
  return (
    <>
      <div className="imgmiddle">
        <div class="card text-bg-dark">
          <img src={imagepath} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
