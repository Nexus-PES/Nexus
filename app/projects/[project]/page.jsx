"use client";
import Image from "next/image";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ProjectContainer from "../../../components/ProjectContainer";
import More from "../../../components/More";

import { PiSpeakerSimpleNoneFill } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";

import { projectData } from "../../../data";
import { getLength } from "../../../lib";
// console.log(projectData);


const ProjectDetailPage = () => {
  const longDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Pellentesque sit amet porttitor eget.
						Augue mauris augue neque gravida in fermentum et
						sollicitudin ac. Quam nulla porttitor massa id neque.
						Orci a scelerisque purus semper eget duis. Id venenatis
						a condimentum vitae sapien pellentesque. Porttitor eget
						dolor morbi non arcu risus quis varius quam. Diam
						volutpat commodo sed egestas egestas fringilla phasellus
						faucibus. Viverra adipiscing at in tellus integer
						feugiat scelerisque varius morbi. Commodo sed egestas
						egestas fringilla phasellus faucibus scelerisque
						eleifend donec. Aenean sed adipiscing diam donec
						adipiscing tristique. Adipiscing elit pellentesque
						habitant morbi tristique senectus. Lectus mauris
						ultrices eros in. At lectus urna duis convallis.
						Habitant morbi tristique senectus et netus et.
						Consectetur a erat nam at lectus urna duis convallis
						convallis. Mauris a diam maecenas sed enim ut sem
						viverra aliquet. Amet purus gravida quis blandit turpis.
						Scelerisque fermentum dui faucibus in ornare quam
						viverra orci. Quisque sagittis purus sit amet. Nulla
						posuere sollicitudin aliquam ultrices sagittis orci a.
						Quam lacus suspendisse faucibus interdum. Morbi
						tincidunt augue interdum velit euismod in pellentesque
						massa placerat. Cras adipiscing enim eu turpis.
						Vestibulum lorem sed risus ultricies tristique. Ut
						faucibus pulvinar elementum integer enim neque. Amet
						luctus venenatis lectus magna. Purus in mollis nunc sed
						id semper. Dignissim enim sit amet venenatis urna
						cursus. Velit laoreet id donec ultrices tincidunt arcu
						non sodales. Elit at imperdiet dui accumsan. Pharetra
						sit amet aliquam id diam maecenas. Tincidunt ornare
						massa eget egestas purus viverra accumsan in. Id donec
						ultrices tincidunt arcu non sodales. Enim nulla aliquet
						porttitor lacus luctus. Varius vel pharetra vel turpis
						nunc. In iaculis nunc sed augue lacus viverra vitae
						congue eu. Augue lacus viverra vitae congue eu consequat
						ac felis. Ac turpis egestas integer eget aliquet nibh
						praesent tristique magna. Augue neque gravida in
						fermentum et sollicitudin ac orci. Egestas integer eget
						aliquet nibh praesent tristique magna. Tincidunt
						lobortis feugiat vivamus at. Varius quam quisque id diam
						vel quam elementum pulvinar. Diam donec adipiscing
						tristique risus. Integer vitae justo eget magna
						fermentum iaculis eu non. Porta non pulvinar neque
						laoreet suspendisse interdum. Laoreet suspendisse
						interdum consectetur libero id. Egestas quis ipsum
						suspendisse ultrices gravida dictum. Consequat mauris
						nunc congue nisi vitae. Viverra tellus in hac habitasse
						platea dictumst vestibulum. Aliquam id diam maecenas
						ultricies mi eget. Risus viverra adipiscing at in tellus
						integer. Morbi quis commodo odio aenean sed adipiscing
						diam donec. Donec ac odio tempor orci dapibus. In cursus
						turpis massa tincidunt dui ut ornare lectus sit. Nibh
						cras pulvinar mattis nunc sed blandit libero volutpat.
						Integer feugiat scelerisque varius morbi. Eu nisl nunc
						mi ipsum faucibus. In nibh mauris cursus mattis molestie
						a iaculis. Enim sit amet venenatis urna. Dui nunc mattis
						enim ut tellus elementum sagittis vitae. Sed adipiscing
						diam donec adipiscing tristique risus`;

  const parsedDate = new Date("Sep 9, 2023 9:00:00").toDateString();

  const timeToRead = getLength(longDescription);

  return (
    <>
      <div className="mx-4 my-8 md:mx-auto max-w-[800px]">
        <h1 className="mt-12 mb-10 text-3xl md:text-5xl font-bold">
          Finding the Eulerian Cycle with Hierholzers Algorithm
        </h1>
        <ul className="flex text-xs gap-x-2 ">
          <li>{timeToRead} min read</li>
          <li>•</li>
          <li>{parsedDate}</li>
        </ul>

        <ReactTooltip
          id="my-tooltip-listen"
          place="top"
          className="text-xxs"
          content="Listen"
        />
        <ReactTooltip
          id="my-tooltip-share"
          place="top"
          className="text-xxs"
          content="Share"
        />
        <ReactTooltip
          id="my-tooltip-more"
          place="top"
          className="text-xxs"
          content="More"
        />

        <div className="border-y-[1px] my-4 p-2 border-white/20 items-center justify-between gap-x-2 hidden md:flex">
          <div className="flex gap-x-4">
            <button
              data-tooltip-id="my-tooltip-listen"
              className="flex gap-x-2 items-center rounded justify-center"
            >
              <PiSpeakerSimpleNoneFill className="w-6 h-6 rounded p-1 hover:bg-white/5" />
              <span className="text-xxs sr-only">Listen</span>
            </button>
            <button
              data-tooltip-id="my-tooltip-share"
              className="flex gap-x-2 items-center justify-center"
            >
              <BsShareFill className="w-6 h-6 p-1 rounded hover:bg-white/5" />
              <span className="text-xxs sr-only">Share</span>
            </button>
          </div>
          <div className="flex gap-x-4">
            <button
              data-tooltip-id="my-tooltip-more"
              className="flex items-center gap-x-2 justify-center"
            >
              <More  />
            </button>
          </div>
        </div>

        <div className="flex gap-x-2 items-center justify-between md:hidden my-4">
          <div className="flex gap-x-2 items-center">
            <button
              // data-tooltip-id="my-tooltip-listen"
              className="rounded-3xl py-1 px-3 border flex items-center gap-x-2 border-white/20  hover:bg-white/10"
            >
              <PiSpeakerSimpleNoneFill className="w-5 h-5" />
              <span className="text-xxs">Listen</span>
            </button>
            <button className="rounded-3xl py-1 px-3 border flex items-center gap-x-2 border-white/20 hover:bg-white/10">
              <BsShareFill
                // data-tooltip-id="my-tooltip-share"
                className="w-3 h-3"
              />
              <span className="text-xxs">Share</span>
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            <button className=" border border-white/20 px-2 rounded-3xl  flex items-center gap-x-2   hover:bg-white/10">
              <More />
            </button>
          </div>
        </div>

        <article className="my-10">
          <Image
            src="/images/events/unsplash_fT49QnFucQ8.png"
            width={800}
            height={400}
            alt="blog"
            className="rounded-sm object-cover w-full max-h-96"
          />
          <section className="space-y-5 my-10 text-text-primary text-sm leading-6 md:text-base md:leading-7">
            <p>
              nec feugiat in. Eu tincidunt tortor aliquam nulla facilisi. Amet
              mattis vulputate enim nulla aliquet. Augue eget arcu dictum varius
              duis. Amet porttitor eget dolor morbi. Quis varius quam quisque id
              diam vel quam. Est velit egestas dui id ornare arcu odio. Massa
              placerat duis ultricies lacus sed turpis tincidunt. At risus
              viverra adipiscing at in tellus integer feugiat. Mauris pharetra
              et ultrices neque ornare aenean euismod elementum nisi. Bibendum
              neque egestas congue quisque egestas diam. Adipiscing commodo elit
              at imperdiet dui accumsan sit. Montes nascetur ridiculus mus
              mauris. Vitae aliquet nec ullamcorper sit amet risus. Congue
              quisque egestas diam in arcu cursus. Malesuada bibendum arcu vitae
              elementum curabitur vitae nunc sed velit. Gravida cum sociis
              natoque penatibus et magnis dis parturient. Imperdiet dui accumsan
              sit amet. Scelerisque eleifend donec pretium vulputate sapien nec
              sagittis aliquam. Varius vel pharetra vel turpis nunc eget lorem
              dolor sed. Mauris commodo quis imperdiet massa tincidunt nunc
              pulvinar sapien. Egestas fringilla phasellus faucibus scelerisque
              eleifend donec pretium vulputate sapien. Morbi non arcu risus quis
              varius quam. Adipiscing elit pellentesque habitant morbi tristique
              senectus. Cursus eget nunc scelerisque viverra. Ipsum dolor sit
              amet consectetur adipiscing elit pellentesque habitant.
            </p>
            <p>
              In this blog post, I would like to explain what are function
              objects and how they can be used to solve different problems by
              giving examples. Overriding the call operator in a class, operator
              (), makes it possible to call an object like an ordinary function.
              Function objects (also known as functors) are
            </p>
            <p>
              In this blog post, I would like to explain what are function
              objects and how they can be used to solve different problems by
              giving examples. Overriding the call operator in a class, operator
              (), makes it possible to call an object like an ordinary function.
              Function objects (also known as functors) are
            </p>
            <p>
              In this blog post, I would like to explain what are function
              objects and how they can be used to solve different problems by
              giving examples. Overriding the call operator in a class,
            </p>
            <p>
              operator. They are typically defined as classes in C++, so they
              also enjoy the features of classes. Using only classes and
              functions solves many problems and it is fine. But sometimes
              function objects are easier to use and save us from the burden of
              complex solutions. STL (Standard Template Library) in C++ provides
              useful built-in function obj/ects and makes things easier.
              Understanding how they are implemented under the hood gives
              insight and encourages us to write custom function objects
            </p>
            <p>
              if built-in function objects are not enough. The question is in
              which situations do we prefer functions objects? OK, lets go
              through the examples and see how we can use functions objects for
              the problems.
            </p>
          </section>
        </article>
        <ul className="flex gap-x-2 items-center justify-center">
          <li>•</li>
          <li>•</li>
          <li>•</li>
        </ul>
      </div>

      <div className="rounded-sm mx-4 md:mx-auto max-w-[800px] bg-shaded py-8">
        <div className="w-full flex flex-col gap-y-4 my-5">
          <h1 className="text-2xl font-semibold text-white">
            What to read next
          </h1>
          <p className="text-text-primary text-xs md:text-sm">We got you.</p>
        </div>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projectData.slice(0, 3).map((project) => (
            <ProjectContainer key={project.id} {...project} />
          ))}
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
