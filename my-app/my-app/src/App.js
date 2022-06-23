// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App() {
  const [Display, setDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Semail, setSemail] = useState(false);
  const [emaileror, setemaileror] = useState(false);
  const [passeror, setpasseror] = useState(false);
  const login = () => {
    if (email !== "hariszahid@gmail.com") {
      setemaileror(true);
    } else if (password !== "123456789") {
      setpasseror(true);
    } else if (Display == true) {
      setDisplay(false);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://thumbs.gfycat.com/CorruptLinearElk-size_restricted.gif")`,
        height: "100%",
      }}
    >
      <h1
        style={{
          color: "white",
          alignSelf: "center",
          textAlign: "center",
          paddingTop: "20%",
          marginTop: "0",
          fontSize:80
        }}
      >
        Login
      </h1>
      {Display === true && Semail == false ? (
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginBottom: "30%",
          }}
        >
          <input
            style={{
              height: 40,
              width: "30%",
              borderRadius: 20,
              alignSelf: "center",
              paddingLeft: 10,
              backgroundColor: "black",
              borderColor: "lightblue",
              color: "lightblue",
            }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
          {emaileror == true ? (
            <h5
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              *Email not found
            </h5>
          ) : (
            <h5></h5>
          )}
          <input
            style={{
              height: 40,
              width: "30%",
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 10,
              paddingLeft: 10,
              backgroundColor: "black",
              borderColor: "lightblue",
              color: "lightblue",
            }}
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            
          />
          {passeror == true ? (
            <h5
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              *Please Input Valid Password
            </h5>
          ) : (
            <h5></h5>
          )}
          <button
            style={{
              width: 200,
              height: 40,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
              backgroundColor: "lightblue",
            }}
            name="login"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div style={{ flexDirection: "column", display: "flex" }}>
          <h1
            style={{
              color: "white",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
           {email} Succesfully login
          </h1>
          <button
            style={{
              width: 200,
              height: 40,
              borderRadius: 20,
              alignSelf: "center",

              fontSize: 15,
              fontWeight: "bold",
              backgroundColor: "lightblue",
            }}
            name="logout"
            onClick={() => {
             
              window.location.reload();
              setDisplay(true);
            }}
          >
            LOG OUT
          </button>
        </div>
      )}
      <div style={{ paddingBottom: "20%" }}></div>
      <br />
      <br />
      <br />
      <br />
    </div>

    // <div></div>
  );
}

export default App;
