import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signinandup() {
  const [signin, Setsignin] = useState(false);
  const history = useNavigate();
  const handlesubmit = (e, type) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.email.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          alert("sign up successfully ");
          Setsignin(true);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <>
      <div className="cont">
        <div className="leftside">
          <form onSubmit={(e) => handlesubmit(e, signin ? "signin" : "signup")}>
            <h1>MasterMindmestro</h1>
            <h2>{signin ? "sign in" : "sign up"}</h2>
            <input type="email" name="email" placeholder="email" />
            <br />
            <input type="password" name="password" placeholder="password" />
            <br />
            <button>{signin ? "sign in" : "sign up"}</button>
          </form>
          <p>
            Lorem ipsum dolor sit amet.{" "}
            <button
              style={{
                color: "#02c1c7",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => (signin ? Setsignin(false) : Setsignin(true))}
            >
              {signin ? "sign up" : "sign in"}
            </button>
          </p>
        </div>
        <div className="rightside">
          <h1>this is part second</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ipsum magnam veniam!
          </p>
        </div>
      </div>
    </>
  );
}
