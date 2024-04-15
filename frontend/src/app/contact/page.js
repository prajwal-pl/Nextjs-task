"use client"

import React,{useState} from "react";
import axios from "axios";
import { contactDetails } from '../services/api'
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    

  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await contactDetails(formData);
      console.log("Form submitted successfully",response.data);

     
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        
     
      });
      setShowSuccessMessage(true);
   
     
    } catch (error) {
      console.error("Error submitting form:", error);
      
    }
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="w-full h-[50vh] bg-slate-800 flex items-center justify-center">
          <h1 className="font-bold text-white text-4xl uppercase ">
            contact uniportal
          </h1>
        </div>
        <div className="bg-gray-900 text-white flex py-16">
          <div className="flex flex-col items-center justify-center w-1/3">
            <CiLocationOn className="text-6xl " />
            <h6 className="text-yellow-300 text-lg font-semibold mt-1">
              Address
            </h6>
            <p className="text-gray-300 text-base mt-2">
             Amari greens,Kharar Mohali,140301
            </p>
            <p className="text-gray-300 text-base">Punjab,India</p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center w-1/3">
            <FaEnvelopeOpenText className="text-5xl " />
            <h6 className="text-yellow-300 text-lg font-semibold mt-1">
              Email address
            </h6>
            <p className="text-gray-300 text-base mt-2">
              uniportalindia@gmail.com
            </p>
            <p className="text-gray-300 text-sm">Monday to Saturday 9am -7pm</p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center w-1/3">
            <MdPhoneIphone className="text-6xl " />
            <h6 className="text-yellow-300 text-lg font-semibold mt-1">
              Address
            </h6>
            <p className="text-gray-300 text-base mt-2">+91-8476912345</p>
            <p className="text-gray-300 text-sm">Monday to Friday 9am -7pm</p>
          </div>
        </div>

        <div className="flex mt-16 mb-16 w-10/12 mx-auto">
          <div className="w-1/2">
            {/* <div style={{ height: "100%", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div> */}
          </div>
          <form className="w-1/2" onSubmit={handleSubmit}>
            <h1 className="text-3xl">Send a message</h1>
        
            <div className="flex mt-16">
              <input
                name="firstName"
                placeholder="Your Name"
                className="border-b w-1/2 px-1 pb-2"
                onChange={handleChange}
                value={formData.firstName}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="border-b w-1/2 px-1 pb-2 ml-4"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            {/*  */}
            <div className="flex mt-8">
              <input
                name="email"
                placeholder="Your Email"
                className="border-b w-1/2 px-1 pb-2"
                onChange={handleChange}
                value={formData.email}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                className="border-b w-1/2 px-1 pb-2 ml-4"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            {/*  */}
            <textarea
              name="message"
              placeholder="Your message"
              className="border-b w-full px-1 pb-2 mt-8"
              rows={5}
              onChange={handleChange}
              value={formData.message}
            />
            {/*  */}
            
            <button
              className="bg-blue-400 text-white text-sm font-semibold py-3 px-8 rounded-3xl mt-10"
              type="submit" onClick={handleSubmit}
            >
              Submit
            </button>
            {showSuccessMessage && ( 
            <p>Thanks, we will contact you soon!</p>
          )}
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
