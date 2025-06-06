import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yuvraj Agrawal</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#achievements" className="hover:text-blue-400">Achievements</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
