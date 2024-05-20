import { PinContainer } from "@/components/ui/3d-pin";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/typwriter-effect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const words = [
    {
      text: "Learn",
      className: "text-white",
    },
    {
      text: "Build",
      className: "text-white",
    },
    {
      text: "Repeat",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[40rem]  min-h-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-10"
        fill="white"
      />
      <div className="p-32 max-w-7xl  mx-auto relative z-10  w-full pt-15 md:pt-0">
        <div className="flex items-center justify-center">
          <Image
            src="/profile.jpeg"
            width={200}
            height={200}
            alt="proifle"
            className="rounded-full "
          />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-2">
          Contact Me <br />
        </h1>
        <TypewriterEffect words={words} className="mt-2" />

        <div className="grid grid-cols-2 mt-14 max-[985px]:flex max-[985px]:flex-col max-[750px]:grid max-[750px]:grid-cols-1 ">
          <PinContainer
            title="x.com/Lightspeedev"
            href="https://x.com/Lightspeedev"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 text-center">
                Twitter
              </h3>
              <div className="text-base !m-0 !p-0  font-bold text-center">
                <span className="text-slate-500 ">Mostly active here</span>
              </div>
              <Link href="https://x.com/Lightspeedev" target="_blank">
                <div className="flex flex-1 w-full rounded-lg">
                  <Image src="/x.png" width={520} height={20} alt="social_x" />
                </div>
              </Link>
            </div>
          </PinContainer>

          <PinContainer
            title="Send me a Mail"
            href="mailto:support@simpliearn.com"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 text-center">
                Email
              </h3>
              <div className="text-base !m-0 !p-0  font-bold text-center">
                <span className="text-slate-500 ">
                  Get in touch to cook something up
                </span>
              </div>
              <Link href="mailto:lightspeedev@gmail.com">
                <div className="flex flex-1 w-full rounded-lg">
                  <Image
                    src="/mail.jpg"
                    width={520}
                    height={20}
                    alt="social_x"
                  />
                </div>
              </Link>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
