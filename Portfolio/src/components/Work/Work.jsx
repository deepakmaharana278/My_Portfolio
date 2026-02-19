import React from 'react'

const Work = () => {
  const projects = [
   {
      title: "Food Ordering System",
      description: "A full-stack food ordering system leveraging Python, Django, and React to provide seamless restaurant management and customer ordering experience.",
      tech: ["Python", "Django", "SQLite", "React", "Bootstrap"],
      demoLink: "https://food-ordering-system-1-mfnt.onrender.com/",
      codeLink: "https://github.com/deepakmaharana278/Food-Ordering-System",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack MERN application with user authentication, product management, and payment integration.",
      tech: ["React + Vite", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "https://e-commerce-website-ts3p.vercel.app/",
      codeLink: "https://github.com/deepakmaharana278/E-Commerce-Website",
    },
    {
      title: "Personal Portfolio",
      description: "Responsive portfolio website built with React and Tailwind CSS, featuring animations and interactive UI.",
      tech: ["React + Vite", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://my-portfolio-chi-nine-4vbjyr31n2.vercel.app/",
      codeLink: "https://github.com/deepakmaharana278/My_Portfolio",
    },
    {
      title: "Face Detection System",
      description: "AI-powered face detection web app using Python, OpenCV.",
      tech: ["Python", "OpenCV", "Deep learning"],
      demoLink: "",
      codeLink: "https://github.com/deepakmaharana278/Face_Detection",
    },
    {
      title: "Employee Management System",
      description: "React-based web app for managing employee records and attendance with CRUD functionality.",
      tech: ["React", "Context API", "Tailwind CSS"],
      demoLink: "https://employeeemanagementt.netlify.app/",
      codeLink: "https://github.com/deepakmaharana278/Employee-Management",
    },
    {
      title: "Finance Tracker",
      description: "Django web app to track personal finances, expenses, and visualize spending habits.",
      tech: ["Python", "Django", "SQLite", "Tailwind CSS"],
      demoLink: "https://financetracker-0jxl.onrender.com/",
      codeLink: "https://github.com/deepakmaharana278/FinanceTracker",
    },
    {
      title: "Deepak-GPT",
      description: "Full-stack chatbot application using React frontend and Django backend integrating OpenAI GPT APIs for conversational AI.",
      tech: ["Python", "Django", "SQLite", "React", "Tailwind CSS", "Open AI"],
      demoLink: "https://mini-chat-bot-5.onrender.com/",
      codeLink: "https://github.com/deepakmaharana278/Mini-Chat-Bot",
    },
    {
      title: "Hospitl Management System",
      description: "Full-stack HMS application using React frontend and Django backend.",
      tech: ["Python", "Django", "SQL", "React + Vite", "Bootstrap"],
      demoLink: "https://hospital-management-system-1-fbpb.onrender.com",
      codeLink: "https://github.com/deepakmaharana278/Hospital-Management-System",
    },
    {
      title: "Gaming Website",
      description: "A full-stack gaming website built using Python, Django, and React, integrating games by fetching data from a third-party API.",
      tech: ["Python", "Django", "React + Vite", "Tailwind CSS"],
      demoLink: "https://gaming-website-lad.vercel.app/",
      codeLink: "https://github.com/deepakmaharana278/Gaming-Website--LAD",
    },
  ];
  return (
   <section id='work' className="py-12 px-6 text-white min-h-screen">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mt-2 mb-4 underline decoration-purple-500 underline-offset-4">
      Projects
    </h2>
    <p className="text-center text-gray-400 mb-10">
      A selection of my recent projects demonstrating my skills in full-stack web development and AI projects.
    </p>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, idx) => (
    <div
      key={idx}
      className="bg-[#10101a] border border-purple-900 rounded-2xl p-7 shadow-[0_4px_20px_rgba(80,0,150,0.3)] hover:border-teal-600 hover:shadow-[0_8px_30px_rgba(20,200,180,0.6)] transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-white mb-4 hover:text-teal-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-3 mb-7">
        {project.tech.map((techItem, i) => (
          <span
            key={i}
            className="bg-purple-950 text-teal-400 text-xs px-3 py-1 rounded-full font-semibold select-none"
          >
            {techItem}
          </span>
        ))}
      </div>
      <div className="flex gap-8 text-xs font-medium">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 hover:underline"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-600 hover:underline"
        >
          Source Code
        </a>
      </div>
    </div>
  ))}
</div>


  </div>
</section>



  )
}

export default Work