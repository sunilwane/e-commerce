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
  // const handlesubmit = (e, type) => {
  //   e.preventDefault();

  //   const email = e.target.email.value;
  //   const password = e.target.email.value;
  //   if (type === "signup") {
  //     createUserWithEmailAndPassword(database, email, password)
  //       .then((data) => {
  //         alert("sign up successfully ");
  //         Setsignin(true);
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   } else {
  //     signInWithEmailAndPassword(database, email, password)
  //       .then((data) => {
  //         history("/home");
  //       })
  //       .catch((err) => {
  //         alert(err.code);
  //       });
  //   }
  // };

  /// new registration

  const intial = {
    name: "",
    mobile: "",
    email: "",
    pass: "",
  };
  const [userdata, setUserData] = useState(intial);

  const [loginuser, setUserlogin] = useState({
    email: "",
    pass: "",
  });
  const handlehanges = (e) => {
    const { value, name } = e.target;

    setUserData({ ...userdata, [name]: value });
  };
  const loginchangeshandle = (e) => {
    const { name, value } = e.target;
    setUserlogin({ ...loginuser, [name]: value });
  };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    signin
      ? fetch("http://localhost:8083/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginuser),
        })
          .then((res) => res.json())
          .then((res) => {
            const store = res.token;
            localStorage.setItem("tokenno", JSON.stringify(res.token));
            navigate("/maincontainer");
          })
      : fetch("http://localhost:8083/user/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            // Authorization: `Barrer ${tokenvalue}`,
          },
          body: JSON.stringify(userdata),
        })
          .then((res) => {
            console.log(res);
            setUserData(intial);
            Setsignin(true);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  return (
    <>
      <div className="cont">
        <div className="leftside">
          <form onSubmit={(e) => handlesubmit(e, signin ? "signin" : "signup")}>
            <h1>MasterMindmestro</h1>
            <h2>{signin ? "sign in" : "sign up"}</h2>
            {signin ? (
              <div className="singininputbox">
                <input
                  onChange={loginchangeshandle}
                  value={loginuser.email}
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <input
                  onChange={loginchangeshandle}
                  value={loginuser.pass}
                  name="pass"
                  type="text"
                  placeholder="password"
                />
                <button
                  style={{
                    marginLeft: "20%",
                    height: "45px",
                    borderRadius: "12px",
                  }}
                >
                  sign In
                </button>
              </div>
            ) : (
              <div className="signupinputbox">
                {" "}
                <input
                  onChange={handlehanges}
                  value={userdata.name}
                  name="name"
                  type="text"
                  placeholder="name"
                />
                <input
                  onChange={handlehanges}
                  value={userdata.mobile}
                  style={{
                    width: "20vw",
                    height: "45px",
                    border: "none",
                    outline: "none",
                  }}
                  name="mobile"
                  type="number"
                  placeholder="mobile"
                />
                <input
                  onChange={handlehanges}
                  value={userdata.email}
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <input
                  onChange={handlehanges}
                  value={userdata.pass}
                  name="pass"
                  type="text"
                  placeholder="password"
                />
                <button
                  style={{
                    marginLeft: "20%",
                    height: "45px",
                    borderRadius: "12px",
                  }}
                  // onClick={handleuserregistration}
                >
                  sign up
                </button>
              </div>
            )}

            {/* <button
              style={{
                marginLeft: "20%",
                height: "45px",
                borderRadius: "12px",
              }}
            >
              {signin ? "sign in" : "sign up"}
            </button> */}
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
      </div>
    </>
  );
}
