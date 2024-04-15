"use client";

import React from "react";
import Link from "next/link";

import { FaUniversity } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import img7 from "../assets/img7.jpg";
import Image from "next/image";

function Study() {
  return (
    <div>
      <Navbar />
      <Image src={img7} alt="study-banner" className="w-full h-[60vh]" />
      <h1 className="text-4xl font-serif tracking-wider text-center mb-5 mt-12">
        Scouting for your next course?
      </h1>
      <div className="flex items-center justify-between mb-16">
        <div className=" w-1/3 py-5">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
            <FaUniversity className="bg-red-600 rounded-full text-7xl p-4 text-white" />
            <h2 className="font-serif font-medium text-base pt-3">
              Bachelor&apos;s programmes
            </h2>
            
            <Link
              className="font-serif bg-rose-300 text-white font-semibold text-sm py-2 px-2 rounded-md"
              onClick={() => localStorage.setItem("course", "bachelor")}
              href="/courses"
            >
              Explore Courses
            </Link>
          </div>
        </div>
        {/*  */}
        <div className=" w-1/3 py-5">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
            <FaUniversity className="bg-red-600 rounded-full text-7xl p-4 text-white" />
            <h2 className="font-serif font-medium text-base pt-3">
              Master&apos;s programmes
            </h2>
          
            {/* <button
              className="font-serif bg-rose-300 text-white font-semibold text-sm py-2 px-2 rounded-md"
              onClick={() => localStorage.setItem("course", "master")}
            >
              Seacrh schlorships
            </button> */}
            <Link
              className="font-serif bg-rose-300 text-white font-semibold text-sm py-2 px-2 rounded-md"
              onClick={() => localStorage.setItem("course", "master")}
              href="/courses"
            >
              Explore Courses
            </Link>
          </div>
        </div>
        {/*  */}
        <div className=" w-1/3 py-5">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
            <FaUniversity className="bg-red-600 rounded-full text-7xl p-4 text-white" />
            <h2 className="font-serif font-medium text-base pt-3">
              PhD & Doctorate studies
            </h2>
           
            {/* <button
              className="font-serif bg-rose-300 text-white font-semibold text-sm py-2 px-2 rounded-md"
              onClick={() => localStorage.setItem("course", "phd")}
            >
              Seacrh schlorships
            </button> */}
            <Link
              className="font-serif bg-rose-300 text-white font-semibold text-sm py-2 px-2 rounded-md"
              onClick={() => localStorage.setItem("course", "PhD")}
              href="/courses"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Study;
