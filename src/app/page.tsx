import Image from "next/image";
import head from "next/head";
import React from "react";

//import images
import profileimage from "/public/p2.png";
import designimage from "/public/design.png";
import code from "/public/code.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";

//import framer motion
import { motion } from "framer-motion";
// import icon
import { RiMoonClearFill } from "react-icons/ri";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

//import hook

export default function Home() {
  //function

  return (
    <div>
      <head>
        <title>create next app</title>

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500&display=swap');
        </style>
      </head>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-30 ">
        {/*mulinma hadanne moblile eketa adala light mode ek */}

        {/*navigation and hero  */}
        <section>
          {/* nav */}
          <nav className="flex justify-between py-10 ">
            <h1 className="  text-1xl font-bold md:text-2xl">
              Develope next app by UDT
            </h1>
            <ul className=" flex items-center">
              {/* icon import react icon*/}
              <li>
                <RiMoonClearFill
                  //onclick function

                  className="
                 cursor-pointer text-xl mx-5 "
                />
              </li>
              <li className="">
                <a
                  href=""
                  className="bg bg-gradient-to-b from-pink-600 to-slate-900 px-5 py-2 text-white rounded-3xl"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero section */}
          <div className=" text-center py-5 ">
            <h1 className=" text-5xl text-bold font-bold text-pink-800 md:text-7xl lg:mb-4">
              Udayanga Developer Team
            </h1>

            <h3 className="text-2xl font-poppins text-black py-4 md:mx-auto md:text-3xl md:mt-4">
              Mobile App and website Developer
            </h3>
            <p className="text-sm text-gray-500 leading-5 py-2 md:text-lg lg:text-xl mx-auto max-w-xl">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              voluptatibus, nam rerum, sequi minima voluptates, rem blanditiis
              magnam eaque dolores laborum quisquam eos. Impedit nobis labore
              natus dolore mollitia. Facere? sample paragraph sample paragraph
              sample paragraph sample paragraph sample paragraph sample
              paragraph sample paragraph sample paragraph sample paragraph
              sample paragraph sample paragraph sample paragraph
            </p>
          </div>
          {/* social media icons */}
          <div className="flex justify-center gap-10 text-3xl px-20 py-5 text-blue-950 ">
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
            <a href="">
              <BsTwitter />
            </a>
            <a href="">
              <BsInstagram />
            </a>
          </div>
          {/* profile image */}

          <div className="w-80 h-80 m-auto relative pt-5 mt-20 bg-gradient-to-b from-pink-600 to-slate-900 rounded-full">
            <Image
              objectFit="cover"
              layout="fill"
              src={profileimage}
              alt="profile image"
            />
          </div>
        </section>
        {/* service section */}
        <section>
          <div className="py-10">
            <h2 className=" font-poppins font-bold text-gray-600 text-2xl md:text-3xl ">
              Services I offer
            </h2>
            <p className="text-sm text-gray-800 leading-5 py-2 lg:text-lg">
              sample paragraph sample paragraph sample paragraph sample
              paragraph sample paragraph sample paragraph sample paragraph
              sample paragraph sample paragraph sample paragraph sample
              paragraph sample paragraph
            </p>
          </div>
          {/* services cards */}
          <div className="md:flex lg:flex mx-auto gap-10">
            <div>
              {/* card one */}
              <div className="bg-gradient-to-b from-pink-800 to-slate-900 text-center rounded-2xl my-5 shadow-sm p-5">
                <Image
                  src={designimage}
                  alt="designimage"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold text-black">
                  Graphics Desingning
                </h2>
                <p className="text-sm py-2 text-white opacity-20 leading-6">
                  sample paragraph sample paragraph sample paragraph sample
                  paragraph sample
                </p>
              </div>
            </div>
            <div>
              {/* card two */}
              <div className="bg-gradient-to-b from-pink-800 to-slate-900 text-center rounded-2xl my-5 shadow-sm p-5">
                <Image
                  src={code}
                  alt="designimage"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold text-black">Coding</h2>
                <p className="text-sm py-2 text-white opacity-20 leading-6">
                  sample paragraph sample paragraph sample paragraph sample
                  paragraph sample
                </p>
              </div>
            </div>
            <div>
              {/* card three */}
              <div className="bg-gradient-to-b from-pink-800 to-slate-900 text-center rounded-2xl my-5 shadow-sm p-5">
                <Image
                  src={designimage}
                  alt="designimage"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold text-black">
                  Graphics Desingning
                </h2>
                <p className="text-sm py-2 text-white opacity-20 leading-6">
                  sample paragraph sample paragraph sample paragraph sample
                  paragraph sample
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* portpolio  */}
        <section className="py-4">
          <div>
            <h2 className="text-2xl font-bold text-black md:text-3xl mt-4">
              Portfolio
            </h2>
            <p className="text-sm lg:text-lg">
              sample paragraph sample paragraph sample paragraph sample
              paragraph sample paragraph sample paragraph sample paragraph
              sample paragraph sample paragraph sample paragraph sample
              paragraph sample paragraph
            </p>
          </div>
          {/* images */}
          <div className="flex gap-10 flex-col p-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lg object-cover"
                src={web1}
                alt="web1 image"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lgobject-cover "
                src={web2}
                alt="web1 image"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lgobject-cover "
                src={web3}
                alt="web1 image"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lgobject-cover "
                src={web1}
                alt="web1 image"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lgobject-cover "
                src={web2}
                alt="web1 image"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className=" rounded -lgobject-cover "
                src={web3}
                alt="web1 image"
                layout="responsive"
              />
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className=" text-black border-t-2 border-black border-opacity-20 gap-5 flex-col py-5 items-center justify-center lg:flex lg:items-center lg:flex-row">
          <div>
            <h3 className="text-base mb-2 lg:text-3xl">
              Contact me for the more details
            </h3>
            <p className=" text-sm opacity-70 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              necessitatibus facilis dicta, ipsa, porro quibusdam a cumque,
              officia ut commodi accusantium tempore reprehenderit aperiam est
              vel nisi nam laudantium unde!
            </p>
          </div>
          <div className="flex justify-center gap-10 text-3xl px-20 py-5 text-blue-950 ">
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
            <a href="">
              <BsTwitter />
            </a>
            <a href="">
              <BsInstagram />
            </a>
          </div>
        </footer>
        <div>
          <h2 className=" text-center font-sans text-gray-500 pb-5 py-5">
            All Right Reserved 2023
          </h2>
        </div>
      </main>
    </div>
  );
}
