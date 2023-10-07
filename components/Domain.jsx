import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLink } from "react-icons/bs";
const Domain = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl  font-semibold text-white">
        About{" "}
        <span className="text-primary font-bold bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text ">
          Domains
        </span>
      </h1>
      <div className="grid grid-cols-1 h-[12rem] md:h-[10rem] md:grid-cols-2 mb-4 w-full rounded-lg  p-2 gap-3 ">
        {domains.map((domain) => (
          <div
            className=" h-[15rem] md:h-[10rem] mb-4 w-full  rounded-lg border-[1px] border-white/20 p-4 gap-3 flex flex-col hover:bg-white/20 "
            key={domain.id}
          >
            <div className="flex  w-full flex-col gap-3">
              <div className="flex gap-4">
                <Image
                  src={domain.image}
                  alt="Picture of the author"
                  height={12}
                  width={12}
                  className="h-12 w-12 rounded-full"
                />
                <div className="w-full flex justify-between items-center md:text-lg">
                  <h1>{domain.name}</h1>
                  <Link href="/projects">
                    <BsLink className="text-sm border-[1px] rounded border-white/20 w-8 h-8  p-[0.25rem]" />
                  </Link>
                </div>
              </div>
              <p>{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Domain;

export const domains = [
  {
    id: 1,
    name: "Web Development",
    image: "/images/project-icon/OFAAX40 1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe sit necessitatibus quidem id magni dignissimos adipisci minima officia error.",
  },
  {
    id: 2,
    name: "App Development",
    image: "/images/project-icon/OFAAX40 11.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe sit necessitatibus quidem id magni dignissimos adipisci minima officia error1.",
  },
  {
    id: 3,
    name: "UI/UX Design",
    image: "/images/project-icon/OFAAX40 12.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe sit necessitatibus quidem id magni dignissimos adipisci minima officia error2.",
  },
];
