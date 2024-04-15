import React from 'react'
import Image from 'next/image';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

import logo from "../assets/logo.png";


function Footer() {
  return (
    <div> <div className="text-white bg-[#131720] py-8">
    <div className="flex w-11/12 mx-auto">
      <div className="w-1/3">
        <Image
          src={logo}
          width={160}
          height={60}
          alt="logo"
          className="-mt-8"
        />
        {/* <div className="flex items-center -mt-2">
          <p className="tracking-widest text-sm">FOLLOW US</p>
          <FaFacebookF className="text-xl ml-3" />
          <FaTwitter className="text-xl ml-3" />
          <IoLogoGoogleplus className="text-xl ml-3" />
          <FaPinterestP className="text-xl ml-3" />
          <FaInstagram className="text-xl ml-3" />
        </div> */}
      </div>
      <div className="w-1/3 flex  justify-center">
        {/* <div>
          <h2 className="font-medium text-xl">Useful links</h2>
          <p className="text-gray-300 text-sm mt-6">
            Generate Admission Letter
          </p>
          <p className="text-gray-300 text-sm mt-2">About</p>
          <p className="text-gray-300 text-sm mt-2">Login</p>
          <p className="text-gray-300 text-sm mt-2">Register</p>
          <p className="text-gray-300 text-sm mt-2">News & Events</p>
          <p className="text-gray-300 text-sm mt-2">Contacts</p>
        </div> */}
      </div>

      <div className="w-1/3 flex  justify-center">
        <div className="">
          <h2 className="font-medium text-xl">Contact with Us</h2>
          <div className="text-gray-300 flex items-center mt-6">
            <IoMdCall />
            <p className="text-sm ml-3">+91-8476912345</p>
          </div>
          <div className="text-gray-300 flex items-center mt-2">
            <FaRegEnvelope />
            <p className="text-sm ml-3">Uniportalindia@gmail.com</p>
          </div>

          
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm flex items-center justify-between w-11/12 mx-auto border-t mt-16 pt-8 pb-6 border-t-gray-700">
     
      <p>ⓒ Uniportal</p>
    </div>
  </div></div>
  )
}

export default Footer