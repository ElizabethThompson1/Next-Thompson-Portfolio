"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Map Plan",
    description: "A UX/UI design project for a career portal assisting U.S. Military members in their transition to civilian roles.",
    image: "/images/projects/mmp.png",
    tag: ["All", "UX/UI"],
    gitUrl: "/",
    previewUrl: "https://mymapplan.com/",
  },
  {
    id: 2,
    title: "Era Solutions",
    description: "Website enhancements for a veteran-focused company providing HR and talent management solutions.",
    image: "/images/projects/ERA.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.erasolutions.us/",
  },
  {
    id: 3,
    title: "Military Solutions",
    description: "A UX/UI redesign to support veterans in finding high-quality jobs and internships through programs like DoD SkillBridge.",
    image: "/images/projects/militarysolutions.png",
    tag: ["All", "UX/UI"],
    gitUrl: "/",
    previewUrl: "https://militarysolution.net/",
  },
  {
    id: 4,
    title: "Lucky Fallis Foundation",
    description: "Facilitated the creation of a platform advocating for military family support and suicide prevention.",
    image: "/images/projects/LuckFallis.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://luckyfallis.org/",
  },
  {
    id: 5,
    title: "Ruth & Naomi Co LLC",
    description: "Website development for a family-oriented service provider offering reliable employee services.",
    image: "/images/projects/RandN.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.ruthandnaomico.com/",
  },
  {
    id: 6,
    title: "Veterans Cybersecurity Group",
    description: "Website devyelopment for a group providing cybersecurity services and training for transitioning service members.",
    image: "/images/projects/VETERANS.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://veteranscybersecurity.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12">
      <motion.h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Professional Projects
      </motion.h2>
      <div
        className="text-white flex flex-wrap justify-center items-center gap-2 py-6"
        role="tablist"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UX/UI"
          isSelected={tag === "UX/UI"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        role="list"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg hover:shadow-2xl rounded-lg overflow-hidden"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
