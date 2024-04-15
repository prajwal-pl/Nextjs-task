"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuTreePine } from "react-icons/lu";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Unilogo from "../assets/Unilogo.png";

import {
  schoolEngineeringUG,
  schoolEngineeringMtech,
  schoolEngineeringMtechPG,
  schoolEngineeringMtechPhD,
  uniSchools,
  schoolPolytechnicDiploma,
  schoolOfMassCommunicationUG,
  OfMassCommunicationPG, // Corrected name
  schoolOfMassCommunicationDoctarate,
  OfMassCommunicationDiploma, // Corrected name
  schoolPharmaceuticalSciencesPG,
  schoolPharmaceuticalSciencesUG,
  schoolManagementStudiesUG,
  schoolManagementStudiesDoctorate,
  schoolManagementStudiesPG,
  schoolPhysicalAndLifeSciencePG,
  schoolManagementStudiesDiploma,
  schoolAirlineTourismHotelManagementUG,
  schoolAirlineTourismHotelManagementDoctorate,
  schoolAirlineTourismHotelManagementPG,
  schoolAirlineTourismHotelManagementValueAdded,
  schoolOfLawUG,
  schoolOfLawDoctorate,
  schoolOfLawPG,
  schoolOfLawNone,
  schoolOfSocialScienceUG,
  schoolOfSocialScienceDoctorate,
  schoolOfSocialSciencePG,
  schoolPhysicalAndLifeScienceUG,
  schoolPhysicalAndLifeScienceDoctarate,
  schoolOfEducationUG,
  schoolOfEducationPG,
  schoolOfEducationDoctarate,
  schoolMedicalAndAlliedUG,
  schoolMedicalAndAlliedDoctarate,
  schoolMedicalAndAlliedPG,
  schoolMedicalAndAlliedDiploma,
  schoolAgricultureScienceUG,
  schoolAgricultureSciencePG,
  schoolAgricultureScienceDiploma,
  schoolOfMassCommunicationPG,
  schoolOfMassCommunicationDiploma,
} from "./courses";
import Image from "next/image";

function Course() {
  const [programme, setPragramme] = useState("UG");

  const [universitySchool, setUniversitySchool] = useState("USET");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  console.log({ programme, universitySchool });

  function courseBasedOnUniversityAndProgramme(programme, universitySchool) {
    if (universitySchool === "USET" && programme === "UG") {
      return schoolEngineeringUG;
    } else if (universitySchool === "USET" && programme === "PG") {
      return schoolEngineeringMtechPG;
    }
    // else if (universitySchool === "USET" && programme === "MTech-PG") {
    //   return schoolEngineeringMtechPG;
    // }
    else if (universitySchool === "USET" && programme === "PhD") {
      return schoolEngineeringMtechPhD;
    }
    //SCHOOL OF POLYTECHNIC
    else if (universitySchool === "USP" && programme === "Diploma") {
      return schoolPolytechnicDiploma;
    }
    //UNIVERSITY SCHOOL OF PHARMACEUTICAL SCIENCES (USPS)
    else if (universitySchool === "USPS" && programme === "PG") {
      return schoolPharmaceuticalSciencesPG;
    } else if (universitySchool === "USPS" && programme === "UG") {
      return schoolPharmaceuticalSciencesUG;
    }
    //UNIVERSITY SCHOOL OF MANAGEMENT STUDIES (USMS)
    else if (universitySchool === "USMS" && programme === "UG") {
      return schoolManagementStudiesUG;
    } else if (universitySchool === "USMS" && programme === "PG") {
      return schoolManagementStudiesPG;
    } else if (universitySchool === "USMS" && programme === "Doctarate") {
      return schoolManagementStudiesDoctorate;
    } else if (universitySchool === "USMS" && programme === "Diploma") {
      return schoolManagementStudiesDiploma;
    }
    ////UNIVERSITY SCHOOL OF AIRLINES TOURISM & HOTEL MANAGEMENT (USATHM)
    else if (universitySchool === "USATHM" && programme === "UG") {
      return schoolAirlineTourismHotelManagementUG;
    } else if (universitySchool === "USATHM" && programme === "PG") {
      return schoolAirlineTourismHotelManagementPG;
    } else if (universitySchool === "USATHM" && programme === "Doctarate") {
      return schoolAirlineTourismHotelManagementDoctorate;
    } else if (universitySchool === "USATHM" && programme === "Diploma") {
      return schoolAirlineTourismHotelManagementValueAdded;
    }
    //UNIVERSITY SCHOOL OF LAW (USL)
    else if (universitySchool === "USL" && programme === "UG") {
      return schoolOfLawUG;
    } else if (universitySchool === "USL" && programme === "PG") {
      return schoolOfLawPG;
    } else if (universitySchool === "USL" && programme === "Doctarate") {
      return schoolOfLawDoctorate;
    }

    //UNIVERSITY SCHOOL OF SOCIAL SCIENCES (USSS)
    else if (universitySchool === "USSS" && programme === "UG") {
      return schoolOfSocialScienceUG;
    } else if (universitySchool === "USSS" && programme === "PG") {
      return schoolOfSocialSciencePG;
    } else if (universitySchool === "USSS" && programme === "Doctarate") {
      return schoolOfSocialScienceDoctorate;
    }

    ////UNIVERSITY SCHOOL OF PHYSICAL SCIENCES & LIFE SCIENCES  (USPSLS)
    else if (universitySchool === "USPSLS" && programme === "UG") {
      return schoolPhysicalAndLifeScienceUG;
    } else if (universitySchool === "USPSLS" && programme === "PG") {
      return schoolPhysicalAndLifeSciencePG;
    } else if (universitySchool === "USPSLS" && programme === "Doctarate") {
      return schoolPhysicalAndLifeScienceDoctarate;
    }

    //UNIVERSITY SCHOOL OF EDUCATION (USED)
    else if (universitySchool === "USED" && programme === "UG") {
      return schoolOfEducationUG;
    } else if (universitySchool === "USED" && programme === "PG") {
      return schoolOfEducationPG;
    } else if (universitySchool === "USED" && programme === "Doctarate") {
      return schoolOfEducationDoctarate;
    }
    //UNIVERSITY SCHOOL OF MEDICAL & ALLIED SCIENCES (USMAS)
    else if (universitySchool === "USMAS" && programme === "UG") {
      return schoolMedicalAndAlliedUG;
    } else if (universitySchool === "USMAS" && programme === "PG") {
      return schoolMedicalAndAlliedPG;
    } else if (universitySchool === "USMAS" && programme === "Doctarate") {
      return schoolMedicalAndAlliedDoctarate;
    } else if (universitySchool === "USMAS" && programme === "Diploma") {
      return schoolMedicalAndAlliedDiploma;
    }

    ////UNIVERSITY SCHOOL OF AGRICULTURE SCIENCES (USAS)
    else if (universitySchool === "USAS" && programme === "UG") {
      return schoolAgricultureScienceUG;
    } else if (universitySchool === "USAS" && programme === "PG") {
      return schoolAgricultureSciencePG;
    } else if (universitySchool === "USAS" && programme === "Diploma") {
      return schoolAgricultureScienceDiploma;
    }
    //University  School of Mass Communication & Digital Journalism (USMCDJ)
    else if (universitySchool === "USMCDJ" && programme === "UG") {
      return schoolOfMassCommunicationUG;
    } else if (universitySchool === "USMCDJ" && programme === "PG") {
      return schoolOfMassCommunicationPG;
    } else if (universitySchool === "USMCDJ" && programme === "Doctarate") {
      return schoolOfMassCommunicationDoctarate;
    } else if (universitySchool === "USMCDJ" && programme === "Diploma") {
      return schoolOfMassCommunicationDiploma;
    }
    //
    else {
      return [];
    }
  }

  function selectedProgrammeOnCoursePage() {
    const selectedProgramme = localStorage.getItem("course");

    if (selectedProgramme === "bachelor") {
      setPragramme("UG");
    } else if (selectedProgramme === "master") {
      setPragramme("PG");
    } else {
      setPragramme("PhD");
    }
  }

  useEffect(() => {
    selectedProgrammeOnCoursePage();
  }, []);

  console.log(schoolOfMassCommunicationDiploma);

  return (
    <div>
      <div className="flex">
        <div className=" w-1/4 px-4">
          <div
            className="flex items-center justify-between border-b border-b-gray-300 pt-2 pb-3 mb-2 cursor-pointer border-t-red-700 border-t-4 mt-14"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center">
              <HiOutlineSquares2X2 className="text-2xl" />
              <p
                className="font-bold ml-1 text-lg normal-case"
                // onClick={() => setUniversitySchool("USET")}
              >
                Discipline
              </p>
            </div>
            {isDropdownOpen ? (
              <RiArrowDropUpLine className="text-4xl" />
            ) : (
              <RiArrowDropDownLine className="text-4xl" />
            )}
          </div>
          <div>
            {/*  */}
            {uniSchools.map((item, index) => (
              <>
                {isDropdownOpen && (
                  <div
                    className="flex items-center justify-between pt-3 cursor-pointer"
                    key={index}
                    onClick={() => setUniversitySchool(item.schoolSN)}
                  >
                    <div className="flex items-center text-gray-900">
                      <LuTreePine className="text-lg mr-2 text-gray-800" />
                      <p className="text-xs text-gray-800">{item.school}</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {
                        courseBasedOnUniversityAndProgramme(
                          programme,
                          item.schoolSN
                        ).length
                      }
                    </p>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        {/* /** ************************/}
        <div className=" w-3/4 pl-5">
          <h1 className="pl-5 text-3xl font-bold pb-9 pt-5">
          {  `${programme==="UG" ?"Bachelor’s degree":"Postgraduate degrees"} from all around the world`}
          </h1>
          {/* <div className="flex pl-5">
            <p
              className={`text-sky-900 font-normal text-base  py-2 mr-6 w-44 cursor-pointer  ${
                programme === "Diploma" &&
                "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("Diploma")}
            >
              Diploma
            </p>
            <p
              className={`text-sky-900 font-normal text-base  py-2 mr-6 w-44 cursor-pointer  ${
                programme === "UG" && "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("UG")}
            >
              Under Graduate
            </p>
            <p
              className={`text-sky-900 font-normal text-base  py-2 mr-6 w-44 cursor-pointer  ${
                programme === "PG" && "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("PG")}
            >
              Post Graduate
            </p>
            <p
              className={`text-sky-900 font-normal text-base  py-2  mr-6 w-44 cursor-pointer ${
                programme === "MTech-PT" &&
                "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("MTech-PT")}
            >
              M.Tech(Part Time)
            </p>
            <p
              className={`text-sky-900 font-normal text-base  py-2  mr-6 w-44 cursor-pointer ${
                programme === "MTech-PG" &&
                "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("MTech-PG")}
            >
              M.Tec(Post Graduate)
            </p>
            <p
              className={`text-sky-900 font-normal text-base  py-2 mr-6 w-44 cursor-pointer ${
                programme === "PhD" && "border-b-4  border-b-sky-900 font-bold"
              }`}
              onClick={() => setPragramme("PhD")}
            >
              Doctroate
            </p>
          </div> */}
          {/*  */}
          <div className="w-full bg-sky-100 pl-5 h-screen overflow-scroll">
            {/* <p className="text-sky-900 font-normal py-4">121909 Bachelors</p> */}
            <div className="w-5/6 ">
              {(
                courseBasedOnUniversityAndProgramme(
                  programme,
                  universitySchool
                ) || []
              ).map((item, index) => (
                <div key={index}>
                  <div className="bg-white shadow-md w-full p-3 rounded-md mt-5">
                    <h2 className="font-bold text-2xl">{item?.courseName}</h2>
                    <div className="flex items-start justify-between pt-4 ">
                      <p className="text-sky-900 font-normal text-xs w-4/5">
                        {item.eligibility}
                      </p>
                      <div className="w-1/5 pl-4">
                        <h4 className="font-bold text-base">
                          {item.fee} INR / year
                        </h4>
                        <h4 className="font-bold pt-2 text-base">
                          {item.years}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs">
                        Bachelor<span className="text-yellow-300 px-1">/</span>
                        full-time<span className="text-yellow-300 px-1">/</span>
                        On campus
                      </p>
                      <div className="flex mt-6">
                        <Image src={Unilogo} alt="" className="w-10" />
                        <div className="ml-3">
                          <p className="text-xs">Rayat Bahra University</p>
                          <p className="text-xs text-gray-500">India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*  */}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
