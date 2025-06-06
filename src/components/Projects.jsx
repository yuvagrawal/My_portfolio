import React from "react";

const projects = [
  {
    title: "Manthan",
    tech: "React.js, Redux, Node.js, Express, MongoDB, Socket.io",
    date: "April 2025",
    details: [
      "Built a real-time chat application enabling one-to-one messaging with complete chat history.",
      "Implemented user authentication using JWT tokens (signup, login, logout).",
      "Integrated Socket.io for live message delivery and online user tracking.",
      "Searchable user list to find chat partners by name.",
    ],
    link: "https://github.com/yuvagrawal/Manthan", // Replace with actual URL
  },
  {
    title: "E-Commerce Site",
    tech: "React.js, Redux, Node.js, Express, MongoDB, Vercel",
    date: "March 2024",
    details: [
      "Developed a MERN-based online shopping site for users and admins.",
      "Features include product filtering, sorting, online payments (Stripe).",
      "Admins can manage products and orders.",
      "Password reset via email using Nodemailer, invoice sent on order.",
    ],
    link: "https://ecommerce-project-chi-five.vercel.app",
  },
  {
    title: "Permalist",
    tech: "EJS, Node.js, Express, PostgreSQL",
    date: "January 2024",
    details: [
      "Permanent to-do list project with daily routine editing.",
      "Activities marked complete are auto-removed.",
      "Data stored in PostgreSQL tables.",
    ],
    link: "https://github.com/yuvagrawal/Permalist",
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-10 p-6 rounded-xl shadow-xl bg-white border-l-8 border-blue-400 hover:border-indigo-500 transition-all duration-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>
          <p className="text-sm italic text-gray-600 mb-2">{project.tech}</p>
          <ul className="list-disc pl-6 text-gray-800 mb-3">
            {project.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <a
            href={project.link}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}
