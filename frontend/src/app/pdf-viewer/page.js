import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Apply = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div className="apply-form" style={{ flex: "3 0 auto", textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "3rem" }}>Coming Soon!!!</div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
