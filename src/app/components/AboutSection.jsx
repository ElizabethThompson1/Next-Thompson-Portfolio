"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaNodeJs, FaReact, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiSequelize, SiTailwindcss, SiFirebase, SiMongodb, SiRedux } from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li className="flex items-center">
          <FaNodeJs className="text-green-500 mr-2" /> Node.js
        </li>
        <li className="flex items-center">
          <SiExpress className="text-gray-500 mr-2" /> Express
        </li>
        <li className="flex items-center">
          <SiSequelize className="text-purple-500 mr-2" /> Sequelize
        </li>
        <li className="flex items-center">
          <FaJsSquare className="text-yellow-500 mr-2" /> JavaScript
        </li>
        <li className="flex items-center">
          <FaReact className="text-blue-400 mr-2" /> React
        </li>
        <li className="flex items-center">
          <SiTailwindcss className="text-teal-400 mr-2" /> Tailwind CSS
        </li>
        <li className="flex items-center">
          <SiFirebase className="text-orange-400 mr-2" /> Firebase
        </li>
        <li className="flex items-center">
          <SiMongodb className="text-green-700 mr-2" /> MongoDB
        </li>
        <li className="flex items-center">
          <FaDatabase className="text-gray-600 mr-2" /> SQL
        </li>
        <li className="flex items-center">
          <SiRedux className="text-purple-500 mr-2" /> Redux
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>DevCodeCamp - Full Stack Web Development Bootcamp</li>
        <li>University of the People - Computer Science (Ongoing)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Google UX Design Professional Certificate</li>
        <li>COITB Certified JavaScript Professional</li>
        <li>COITB Certified React Developer</li>
        <li>COITB Certified MySQL Backend Developer</li>
        <li>Department of Labor - Software Developer Apprenticeship Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.webp"
          alt="About me"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a skilled full-stack web developer with a proven ability to create efficient, scalable, and user-focused web applications. My expertise lies in using modern technologies such as React, Redux, Node.js, Express, MySQL, and Firebase to deliver impactful solutions. Through my dedication to excellence in development, I have been entrusted with leading an internal apprenticeship program, where I guide others in applying best practices and writing high-quality, maintainable code. I am passionate about solving challenging problems, optimizing performance, and contributing to innovative projects that make a difference.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
