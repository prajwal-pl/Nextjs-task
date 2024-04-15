import { TiTabsOutline } from "react-icons/ti";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';




export default function Home() {
  return (
    <div>
      <Navbar bannerImg />

      <div className="flex items-center">
        <div className="w-1/3 bg-orange-300 h-64 relative image-container">
          <div className="blue-overlay"></div>
          <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img1.jpg"
            alt="logo"
            className="bg-orange-600 w-full h-full "
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
            <h4 className="text-2xl font-bold text-center">LATEST UNIPORTAL</h4>
            <p className="text-xl font-semibold text-center">Courses</p>
            <Link href='/study'>
            <button className="w-36 text-sm bg-blue-500 text-center font-semibold text-white py-2 rounded-2xl mt-4">
              Explore
            </button>
            </Link>
          </div>
        </div>

        <div className="w-1/3 bg-orange-300 h-64 relative image-container">
          <div className="purple-overlay"></div>
          <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img1.jpg"
            alt="logo"
            className="bg-orange-600 w-full h-full "
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
            <h4 className="text-2xl font-bold text-center">COMMUNITY</h4>
            <p className="text-xl font-semibold text-center">Students</p>
            <Link href='/blogpost'>
            <button className="w-36 text-sm bg-blue-500 text-center font-semibold text-white py-2 rounded-2xl mt-4">
              Read more
            </button>
            </Link>
          </div>
        </div>

        <div className="w-1/3 bg-orange-300 h-64 relative">
          <div src="" alt="logo" className="bg-purple-950 w-full h-full " />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
            <h4 className="text-2xl font-bold text-center">ADMISSION</h4>
            <p className="text-xl font-semibold text-center">Query</p>
            <Link href="/contact">
            <button className="w-36 text-sm bg-blue-500 text-center font-semibold text-white py-2 rounded-2xl mt-4">
              Submit
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-3xl font-medium my-4">
          Explore Our Course Catalog
        </h3>

        <div>
          <div className="flex items-center justify-center text-white ">
            <div className="w-1/3 bg-orange-300 h-64 relative m-4 catalog-img-container">
              <img
              src ="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img3.jpg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium uppercase tracking-wider pl-2">
                    15 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium">Arts and Humanities</p>
              </div>
            </div>
            {/*  */}
            <div className="w-1/3 bg-purple-400 h-64 relative m-4 catalog-img-container">
              <img
                src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/soft.jpg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium uppercase tracking-wider pl-2">
                    23 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium ">Engineering</p>
              </div>
            </div>
            {/*  */}
            <div className="w-1/3 bg-orange-300 h-64 relative m-4 catalog-img-container">
              <img src ="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/engi.jpeg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium  uppercase tracking-wider pl-2">
                    23 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium ">Architecture</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-center text-white">
            <div className="w-1/3 bg-orange-300 h-64 relative m-4 catalog-img-container">
              <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/sci.jpeg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium uppercase tracking-wider pl-2">
                    23 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium">Science and Biology</p>
              </div>
            </div>
            {/*  */}
            <div className="w-1/3 bg-purple-400 h-64 relative m-4 catalog-img-container">
              <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img4.jpg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium uppercase tracking-wider pl-2">
                    23 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium ">Law and Criminology</p>
              </div>
            </div>
            {/*  */}
            <div className="w-1/3 bg-orange-300 h-64 relative m-4 catalog-img-container">
              <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img2.jpg"
                alt="logo"
                className="catalog-img-container-image w-full h-full contrast-125"
              />
              <div className="absolute bottom-6 left-4 transform ">
                <div className="flex items-center whitespace-nowrap mb-1">
                  <TiTabsOutline className="text-2xl " />
                  <p className="text-base font-medium  uppercase tracking-wider pl-2">
                    23 Programmers
                  </p>
                </div>
                <p className="text-2xl font-medium ">Medical</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/*  */}
      {/* <div className="w-11/12 mx-auto"> */}
      <div className="relative mt-16">
        <img src="https://uniportalindia.s3.ap-southeast-2.amazonaws.com/img9.png"
          alt="logo"
          className="bg-orange-600 w-full h-[80vh] rounded-sm contrast-125"
        />
        <div className="bg-[#131720] w-2/5 text-white py-10 px-9 absolute top-1/4 left-16">
          <h2 className="w-11/12 text-3xl">Enjoy a great students community</h2>
          <p className="text-sm pt-2 font-light text-gray-300 tracking-normal">
            Join the Student Community at UniPortal, a lively hub for global
            learners. Engage in lively discussions, share your experiences, and
            connect with a diverse network of students. It&apos;s more than a
            platform. it&apos;s your digital campus for interaction,
            collaboration, and the shared pursuit of academic excellence.
          </p>
          {/* <button className="bg-blue-400 text-sm font-semibold py-3 px-7 rounded-3xl mt-7">
            Read more
          </button> */}
        </div>
      </div>
      {/*  */}

      <Footer />
    </div>
  );
}
