import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#18191E] p-6 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-60 overflow-hidden flex justify-center items-center group">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 border-white rounded-full flex justify-center items-center hover:border-primary-500"
          >
            <CodeBracketIcon className="h-8 w-8 text-white hover:text-primary-500" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 border-white rounded-full flex justify-center items-center hover:border-primary-500"
          >
            <EyeIcon className="h-8 w-8 text-white hover:text-primary-500" />
          </Link>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <p className="text-base text-[#ADB7BE] mt-2">{description}</p>
      <div className="mt-4 flex justify-between">
        <Link href={gitUrl} className="text-primary-500 hover:underline">
          GitHub
        </Link>
        <Link href={previewUrl} className="text-primary-500 hover:underline">
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
