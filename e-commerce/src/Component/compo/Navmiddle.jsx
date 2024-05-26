import React from "react";
import "./navmiddle.css";
import imagepath1 from "../../images/carousel-01.jpg";
import imagepath2 from "../../images/carousel-02.jpg";
import imagepath3 from "../../images/carousel-03.jpg";
import manimage from "../../images/manimage.jpg";
export default function Navmiddle() {
  return (
    <>
      {/* <div className="imgmiddle">
        <div class="card text-bg-dark">
          <img src={imagepath} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h1 class="card-title" style={{ fontSize: "100px" }}>
              ShopEasy An<span className="spantag">d E-nalanda</span>
            </h1>
            <p class="card-text" style={{ fontSize: "20px" }}>
              Creating an shopEasy for books involves designing a user interface
              that allows users to browse, search, and purchase bo
              <span style={{ color: "black" }}>
                oks. <br />
                Each book should have a detailed description page that provides
                essential information about the book <br /> Here’s how you can
                structure the book description in yourshopEasy
              </span>
            </p>
            <p class="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div> */}
      <div id="carouselExampleCaptions" class="carousel slide imgmiddle">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagepath1} className="d-block w-100 img123" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1
                class="card-title"
                style={{
                  fontSize: "80px",
                  // position: "absolute",
                  zIndex: 1,
                  marginTop: "10%",
                  marginLeft: "5%",
                }}
              >
                ShopEasy An
                <span className="spantag" style={{ color: "rgb(74, 3, 3)" }}>
                  d E-nalanda
                </span>
              </h1>
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={imagepath2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1
                class="card-title"
                style={{
                  fontSize: "80px",
                  // position: "absolute",
                  zIndex: 1,
                  marginTop: "10%",
                  marginLeft: "5%",
                }}
              >
                ShopEasy An
                <span className="spantag" style={{ color: "" }}>
                  d E-nalanda
                </span>
              </h1>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={imagepath3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1
                class="card-title"
                style={{
                  fontSize: "80px",
                  // position: "absolute",
                  zIndex: 1,
                  marginTop: "10%",
                  marginLeft: "5%",
                }}
              >
                ShopEasy An<span className="spantag">d E-nalanda</span>
              </h1>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
