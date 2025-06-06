import React from "react";

export default function Skills() {
  const skills = {
    "Programming Languages": ["C", "C++", "Python (basic)", "JavaScript"],
    "Web Development": ["HTML", "CSS", "React.js", "Redux", "Bootstrap", "Node.js", "Express", "Vercel"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "GitHub", "Postman", "Markdown", "VS Code"],
    "Courses Studied": [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "OOP",
      "Computer Organization and Architecture",
    ],
  };

  return (
    <section
      id="skills"
      className="px-4 py-16 max-w-6xl mx-auto  rounded-xl"
    >
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12">
        Skills
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {Object.entries(skills).map(([title, items], idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md border-l-8 border-indigo-400 hover:border-pink-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">{title}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-indigo-400 to-pink-400 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
