import React from "react";
import {
  SiPython, SiC, SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiMysql, SiMongodb, SiDjango, SiExpress, SiNodedotjs,
  SiGit, SiGithub, SiPostman, SiNetlify, SiCanva, SiVercel
} from "react-icons/si";
import { FaJava, FaDatabase, FaCompass, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiRender } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-500" /> }
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "SQLite", icon: <FaDatabase className="text-indigo-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-white dark:text-gray-300" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }, // Fixed import
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Compass", icon: <FaCompass className="text-indigo-400" /> },
      { name: "Render", icon: <SiRender className="text-blue-400" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> }
    ],
  },
];

const Skills = () => (
  <section className="py-16 px-6 md:px-12 font-sans bg-gradient-to-b from-[#181829] to-[#22223b] text-gray-100">
    <h2 className="text-3xl font-bold text-center mb-4 underline decoration-purple-500 underline-offset-4">
      SKILLS
    </h2>
    <p className="text-center text-gray-400 mb-10">
      A collection of my technical skills and expertise honed through various projects and experiences
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      {skillsData.map((group) => (
        <div key={group.title} className="bg-[#22223b] border border-purple-700 rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-gray-300 text-center">{group.title}</h3>
          <div className="flex flex-wrap gap-3  justify-center">
            {group.skills.map(skill => (
              <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-[#181829] rounded-full hover:bg-[#2d2d45] transition">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-md font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
