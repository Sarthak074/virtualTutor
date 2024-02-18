import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Login() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const a = () => {
    if (uname === "Sarthak1228" && pass === "12345678") {
      navigate("./mainmenu", { replace: true });
    } else {
      alert("Enter Right Credentials");
    }
  };
  return (
    <>
      <div className="flex justify-center ">
        <figure>
          <img
            className="block w-52 h-52 mt-16 ml-48"
            src="public\images\tutor.png"
            alt="Tutor"
          />
          <figcaption className="font-lilita text-6xl mt-3 text-blue-700">
            Welcome to Virtual Tutor
          </figcaption>
        </figure>
      </div>
      <div className="flex justify-center ">
        <div className="bg-cyan-200 max-w-1/3 h-96 mt-10  rounded-2xl shadow-2xl ">
          <p>
            <label
              className="font-sans text-purple-500 text-2xl ml-12 font-bold "
              htmlFor="text"
            >
              User ID:
            </label>
            <input
              value={uname}
              onChange={(a) => setUname(a.target.value)}
              className=" mt-20 ml-2 uname h-8 rounded-2xl p-2" 
              type="text"
              placeholder="Enter username"
              required
            />
          </p>
          <p>
            <label
              className="font-sans text-purple-500  text-2xl ml-12 mt-28  font-bold"
              htmlFor="text"
            >
              Password:
            </label>
            <input
              value={pass}
              onChange={(a) => setPass(a.target.value)}
              className="mt-16 ml-2 pass h-8 rounded-2xl p-2"
              type="password"
              required
              minLength={8}
              placeholder="Enter password"
            />
          </p>
          <p>
            <a className="ml-96 mr-2 font-sans font-bold " href="">
              Forgot Password?
            </a>
          </p>
          
            <button
              onClick={a}
              className="bg-purple-500 text-3xl rounded-3xl p-3 text-white mt-16
             ml-56 font-bold relative right-4"
              type="submit"
            >
              Login
            </button>
          
        </div>
      </div>
    </>
  );
}

export default Login;
