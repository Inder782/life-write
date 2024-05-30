import React from "react";
import Divider from "@mui/material/Divider";
import { footer_link } from "@/statics/footer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <Divider orientation="horizontal" flexItem className="" />
      <div className="flex justify-around mt-4">
        <div>© 2024 Life-write. All rights reserved.</div>
        <div className="flex gap-20">
          {footer_link.map((item) => (
            <Link href={item.link} key={item.id} target="__blank">
              <Image
                src={item.icon}
                width={25}
                height={25}
                alt="link_logo"
                className="dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
