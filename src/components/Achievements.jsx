import React from "react";

export default function Achievements() {
  const achievements = [
    "Cleared GATE 2024 in Computer Science Subject.",
    "Received the Top Achievers Award from the city collector for securing 3rd position in the city in the 10th board exam.",
  ];

  return (
    <section
      id="achievements"
      className="className=text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12">
        Achievements
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border-l-8 border-pink-400 hover:border-indigo-500 transition duration-300"
          >
            <div className="text-pink-500 mt-1">
              <div className="text-pink-500 text-xl mt-1">🏆</div>
            </div>
            <p className="text-gray-800 text-md font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
