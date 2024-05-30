import React from "react";
import Divider from "@mui/material/Divider";
import { footer_link } from "@/statics/footer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mb-5">
      <Divider orientation="horizontal" flexItem className="dark:invert" />
      <div className="flex justify-around mt-4 max-[550px]:flex max-[550px]:flex-col max-[550px]:items-center max-[550px]:text-center">
        <div>© 2024 Life-write. All rights reserved.</div>
        <div className="flex gap-20 max-[550px]:flex max-[550px]:flex-col max-[550px]:items-center max-[550px]:mt-10 max-[550px]:gap-10">
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
