import Link from "next/link";
import React from "react";
import { Links_Nav } from "@/statics/Links_Nav";
import Theme from "../ThemeSelect/Theme";
import { FcLike } from "react-icons/fc";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between p-2">
      <Theme />
      <div>
        <Link href="/" className="max-sm:text-1xl">
          <h1 className="text-white font-bold text-3xl ml-32 ">
            Inder Chandel
          </h1>
        </Link>
      </div>
      <div className="text-white flex max-[1300px]:hidden">
        {Links_Nav.map((item) => (
          <Link href={item.to} className="p-6" key={item.id}>
            {item.Link}
          </Link>
        ))}
      </div>
      <div className="min-[1300px]:hidden">
        <Sheet>
          <SheetTrigger>
            <FcLike />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center ">
            {Links_Nav.map((item) => (
              <Link href={item.to} className="p-6 mt-20" key={item.id}>
                {item.Link}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
