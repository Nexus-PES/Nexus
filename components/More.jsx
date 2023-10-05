"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

export default function Example() {
  return (
    <div className="text-left">
      <Menu as="div" className="flex items-center justify-center">
        {/* <div> */}
          <div>
            <Menu.Button className="justify-center rounded-md  bg-opacity-20 flex items-center  text-sm font-medium text-white">
              <BsThreeDots className="text-2xl font-extrabold" />
              <span className="sr-only">More</span>
            </Menu.Button>
          {/* </div> */}
        </div>
        <Transition
        // className="absolute top-0"
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-[2rem] top-[21rem]  border-[1px] border-white/20 mt-12 md:top-[21rem]  w-[13rem] origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#0a0a0a] z-50 lg:right-[20rem] lg:top-[18rem]">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-white bg-[#0a0a0a ]" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/">HOME</Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-background " : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/about">ABOUT</Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-background " : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/discover">DISCOVER</Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-background  " : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/projects">PROJECTS</Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-background " : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/events">EVENTS</Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
