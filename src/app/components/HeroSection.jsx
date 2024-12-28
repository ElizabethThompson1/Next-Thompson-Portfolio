"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-primary bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Elizabeth Thompson",
                1000,
                "Full-Stack Developer",
                1000,
                "Front-End Specialist",
                1000,
                "UI/UX Enthusiast",
                1000,
                "React Expert",
                1000,
                "Problem Solver",
                1000,
                "Web Development Pro",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a full-stack developer skilled in React, Redux, Node.js, and MongoDB, creating efficient, user-friendly applications that solve real-world problems.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#74C69D] to-[#1B4332] hover:bg-[#52796F] text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Thompson-Resume.pdf";
                link.download = "Elizabeth_Thompson_Resume.pdf";
                link.click();
              }}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#74C69D] to-[#1B4332] hover:bg-[#52796F] text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-[#1B4332] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-[55%] top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
