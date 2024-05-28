"use client";
import { login } from "@/lib";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Page = () => {
  const router = useRouter();
  const [user, setuser] = useState("");
  const [pwd, setpwd] = useState("");

  const handle_user = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser(e.target.value);
  };

  const handle_pwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwd(e.target.value);
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = await login({ user, pwd });
    const status = auth?.status;
    if (status == 200) {
      router.push("/");
    } else if (status === 401) {
      // here i can return a pop over for un auth
      console.log("Un auth");
    }
  };

  return (
    <div
      className="flex  items-center bg-cover min-h-screen justify-center"
      style={{
        backgroundImage: 'url("/login.jpg")',
      }}
    >
      <form onSubmit={submit}>
        <div className="text-center backdrop-blur-2xl w-80 h-1/2 border-2 border-sky-500 rounded-lg font-mono text-xl font-bold text-white">
          <h1 className="flex justify-center mt-4">Let&apos;s Login</h1>

          <p className="mt-7 text">Username</p>
          <input
            className="rounded-full w-60 text-center mt-5 text-black"
            type="text"
            placeholder="Enter UserName here"
            onChange={handle_user}
          />
          <p className="mt-6">Password</p>
          <input
            className="rounded-full w-60 text-center mt-5 text-black"
            type="password"
            placeholder="Password"
            onChange={handle_pwd}
          />
          <br />
          <button
            type="submit" // This line makes the button trigger form submission
            className="bg-indigo-500 shadow-indigo-500/50 border-4 rounded-full w-56 shadow-2xl mt-9 mb-10"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
