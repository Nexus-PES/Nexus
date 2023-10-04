"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Example() {
  return (
    <div className=" text-left">
      <Menu as="div" className="flex justify-center">
        <div>
          <div>
            <Menu.Button className="justify-center rounded-md  bg-opacity-20  text-sm font-medium text-white">
              <AiOutlineMenu className=" md:hidden text-2xl font-extrabold" />
              <span className="sr-only">Menu</span>
            </Menu.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-4 mt-12  w-[13rem] origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#0a0a0a] z-50">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-white bg-[#0a0a0a] " : "text-white"
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
