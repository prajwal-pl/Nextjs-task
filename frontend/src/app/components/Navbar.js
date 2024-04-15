"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import logo from "../assets/logo.png";

import ReactPlayer from "react-player";
import Link from "next/link";

function Navbar({ bannerImg }) {
  const [isClient, setIsClient] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient && (
        <div>
          {bannerImg && (
            <div className="w-full h-screen absolute m-0 p-0">
              <ReactPlayer
                url={"https://uniportalindia.s3.ap-southeast-2.amazonaws.com/intro.mp4"}
                height={"auto"}
                width={"100%"}
                playing={play}
                loop={true}
                playIcon={true}
                onReady={() => setPlay(true)}
                muted
              />
            </div>
          )}

          <div
            className={`relative ${
              bannerImg ? "h-screen" : "bg-[#544788] text-white"
            } `}
          >
            <div className="flex items-center justify-between z-50">
              <Image
                src={logo}
                width={160}
                height={60}
                alt="logo"
                className="-mt-2"
              />
           

              <div className="flex items-center z-50">
                <Link
                  className="ml-5 uppercase font-semibold tracking-widest"
                  href="/home"
                >
                  Home
                </Link>
                <Link
                  className="ml-5 uppercase font-semibold tracking-widest"
                  href="/study"
                >
                  Study options
                </Link>
                <Link
                  className="ml-5 uppercase font-semibold tracking-widest"
                  href="/pdf-viewer"
                >
                  Generate 
                  addmission letter
                </Link>

                <Link
                  className="ml-5 uppercase font-semibold tracking-widest" style={{  paddingRight: '100px' }}
                  href="/contact"
                >
                  Contact us
                </Link>
               
               
              </div>
            </div>
            {bannerImg && (
              <div>
                {" "}
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-2xl w-2/3">
                  Where Dreams Meet Degrees, Your One-Stop Hub for Effortless
                  Admission into Top Indian Universities
                </p>
                <FaArrowDownLong className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#6ab4ff] bg-black  text-3xl h-12 w-12 p-3 rounded-full" />
              
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
