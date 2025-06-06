import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 text-black">
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Yuvraj</h2>
      <p className="text-xl max-w-xl mx-auto">
        Full-stack developer passionate about building real-time apps, scalable systems & beautiful UIs.
      </p>
      
      {/* Icons */}
      <div className="flex justify-center space-x-6 mt-6 text-3xl">
        <a href="https://github.com/yuvagrawal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://leetcode.com/u/yuvagrawal/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-code"></i>  {/* LeetCode doesn't have an official FA icon, using a code symbol */}
        </a>
        <a href="https://www.linkedin.com/in/yuvraj-agrawal-543490246/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:yuvrajagrawal61@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}
