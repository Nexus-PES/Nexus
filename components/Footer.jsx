import React from "react";
import Image from "next/image";
import { LiaCopyrightSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <>
      <div className="h-[15rem] border-t-primary border-t-[2px] w-full flex ">
        <div className="flex gap-10 mt-5">
          <div className="flex flex-col gap-5 w-3/5">
            <h1 className="text-2xl text-primary font-semibold">NEXUS</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              odit provident et natus maiores corrupti sequi id ab ipsa soluta.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold">Links</h2>
            </div>
            <p className="text-white/70">Home</p>
            <p className="text-white/70">Get started</p>
            <p className="text-white/70">Services</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold">Others</h2>
            </div>
            <p>Home</p>
            <p>Get started</p>
            <p>Services</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold">Others</h2>
            </div>
            <p>Follow us on Social Media</p>
            <div className="flex gap-2">
              <Image
                src="/images/icons/social-media/blue-fill-instagram.svg"
                width={20}
                height={20}
                alt="insta"
              />
              <Image
                src="/images/icons/social-media/blue-linkedin.svg"
                width={20}
                height={20}
                alt="linkedin"
              />
              <Image
                src="/images/icons/social-media/blue-reddit.svg"
                width={20}
                height={20}
                alt="reddit"
              />
              <Image
                src="/images/icons/social-media/blue-telegram.svg"
                width={20}
                height={20}
                alt="telegram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm flex gap-2 font-semibold">
        <LiaCopyrightSolid className="text-lg" />
        <p>2023 Nexus. All rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
