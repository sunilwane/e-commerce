import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <div>
      <div className="footer-main-container">
        <div className="footer-part-1">
          <div>
            <h3>Sign Up For Newsletters </h3>

            <span>
              Get E-mail updates about our latest shop and special offers.
            </span>
          </div>

          <form className="d-flex" role="search">
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
        <div className="footer-part-2">
          <div className="parttask-1">
            <h5>Contact</h5>
            <span>
              <b>Address:</b>562 Welington road, Street 32, San Francisco <br />
              <b>Phone:</b> +01 2222 365 /(+91)01 2345 6789 <br />
              <b>Phone:</b>10:00 - 18:00. Mon - Sat
            </span>
            <br />
            <h5 className="mt-4">Follow us</h5>
            <div className="followsusbtn">
              <ul>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <GitHubIcon />
                </li>
              </ul>
            </div>
          </div>
          <div className="parttask-2">
            <h6>About</h6>
            <ul>
              <li>About us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="parttask-3">
            <h6>My Account</h6>
            <ul>
              <li>Sign In</li>
              <li>View Carts</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="parttask-4"></div>
        </div>
      </div>
    </div>
  );
}
