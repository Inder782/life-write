import Link from "next/link";
import React from "react";
import { Links_Nav } from "@/constants/Links_Nav";
import Theme from "../ThemeSelect/Theme";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between p-2">
      <Theme />
      <div>
        <Link href="/">
          <h1 className="text-white font-bold text-3xl ml-32">Inder Chandel</h1>
        </Link>
      </div>
      <div className="text-white flex">
        {Links_Nav.map((item) => (
          <Link href="/" className="p-6" key={item.id}>
            {item.Link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
