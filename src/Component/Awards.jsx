import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
//  '../../public'
const Awards = () => {
  return (
    <div className="">
      <div
        className="hero md:bg-fixed min-h-screen"
        style={{
          backgroundImage: `url("/BG/red-black-brush-stroke-banner-background-perfect-canva.jpg")`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="text-center text-4xl text-blue-50 font-semibold my-20">
              My Certificates{" "}
            </h1>
            {/* <div data-aos="fade-up-top" className="flex justify-center mb-10 ">
              <img
                className="max-w-3xl"
                src="../../public/Awards/Screenshot 2023-12-13 103338.png"
                alt=""
              />
            </div> */}
            <div className=" flex flex-col md:flex-row gap-10">
              <div data-aos="fade-up-right" className="md:w-1/2">
                <a
                  href="https://coursera.org/share/a196a9259c7905d548bd361e3e2a488a"
                  target="_blank">
                  {" "}
                  <img src="/Awards/Screenshot 2023-06-28 175641.png" alt="" />
                </a>
              </div>
              <div data-aos="fade-up" className="md:w-1/2">
                <img src="/Awards/Screenshot 2023-12-13 103338.png" alt="" />
              </div>

              <div data-aos="fade-up-left" className="md:w-1/2 ">
                <a
                  href="https://coursera.org/share/d08a509cb75baf041d0501e6c9bb454d"
                  target="_blank">
                  <img src="/Awards/Screenshot 2023-06-28 175918.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
