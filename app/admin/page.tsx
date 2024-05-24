"use client";
import React, { useState } from "react";

const Page = () => {
  const [user, setuser] = useState("");
  const [pwd, setpwd] = useState("");

  const handle_user = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser(e.target.value);
  };

  const handle_pwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwd(e.target.value);
  };

  const signin = async () => {
    try {
      const data = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          password: pwd,
        }),
      });
      if (data.status == 200) {
        return <div>User created</div>;
      }
    } catch (error) {
      console.error("Error creating user", error);
    }
  };
  return (
    <div
      className="flex  items-center bg-cover min-h-screen justify-center"
      style={{
        backgroundImage: 'url("/login.jpg")',
      }}
    >
      <div className=" text-center backdrop-blur-2xl  h-1/2 border-2 border-sky-500 rounded-lg font-mono text-xl font-bold text-white">
        <h1 className="flex justify-center mt-4">Lets Login</h1>
        <p className="mt-7 text">Username</p>
        <input
          className="rounded-full w-72 text-center mt-5 text-black"
          type="text"
          placeholder="Enter UserName here"
          onChange={handle_user}
        ></input>
        <p className="mt-6">Password</p>
        <input
          className=" rounded-full w-72 text-center mt-5 text-black"
          type="password"
          placeholder="Password"
          onChange={handle_pwd}
        ></input>
        <br />
        <button
          className="bg-indigo-500 shadow-indigo-500/50 border-4 rounded-full w-56 shadow-2xl mt-9"
          onClick={signin}
        >
          Login
        </button>
        <p className="mt-9 text-left mx-7"> Already a user?</p>
        <button className="  bg-blue-500 shadow-blue-500/50 border-4 rounded-full w-40 shadow-2xl mt-6 my-5 ml-44 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Page;
