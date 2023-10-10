import React from "react";
import Image from "next/image";
import { LiaCopyrightSolid } from "react-icons/lia";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="p-10">
      <div className="border-secondary/60 border-t-[1px] w-full flex px-4 flex-col  ">
        <div className="flex gap-10 mt-5 flex-col sm:flex-row">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <h1 className="text-3xl text-primary  font-black bg-gradient-to-r from-primary via-blue-600 to-secondary text-transparent bg-clip-text animate-gradient">
                NEXUS
              </h1>
            </Link>
            <p className="text-sm ">
              Explore innovation with Nexus Club, the heart of PES
              University&apos;s CSE department. Join us in the world of
              technology, where learning and creativity collide.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold text-base">Links</h2>
            </div>
            <Link href="/">
              <p className="text-white/70 text-sm">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white/70 text-sm">About Us</p>
            </Link>
            <Link href="/events">
              <p className="text-white/70 text-sm">Events</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold text-base">Projects</h2>
            </div>
            <Link href="/projects">
              <p className="text-white/70 text-sm">All Projects</p>
            </Link>
            <Link href="/projects/1">
              <p className="text-white/70 text-sm">Project 1</p>
            </Link>
            <Link href="/projects/2">
              <p className="text-white/70 text-sm">Project 2</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="h-[16px] w-[2px] bg-primary"></div>
              <h2 className="font-semibold text-base">Others</h2>
            </div>
            <p className="text-white/70 text-sm">Follow us on Social Media</p>
            <div className="flex gap-2  justify-between">
              <Link href="https://www.instagram.com/nexus.pesu/">
                <Image
                  src="/images/icons/social-media/instagram.svg"
                  width={20}
                  height={20}
                  alt="insta"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/nexus-pes/">
                <Image
                  src="/images/icons/social-media/linkedin.svg"
                  width={20}
                  height={20}
                  alt="linkedin"
                />
              </Link>
              <Link href="https://github.com/Nexus-PES/">
                <Image
                  src="/images/icons/social-media/github.svg"
                  width={20}
                  height={20}
                  alt="github"
                />
              </Link>
              <Image
                src="/images/icons/social-media/discord.svg"
                width={20}
                height={20}
                alt="telegram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm flex gap-2 font-semibold mt-6 text-white/60">
        <LiaCopyrightSolid className="text-lg" />
        <p>2023 Nexus. All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
