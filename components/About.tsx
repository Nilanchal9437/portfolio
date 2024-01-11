import React from 'react';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p>As a MERN Stack and Next.js Developer at ATPL</p>
        <p>
          I will be responsible for designing and implementing scalable and
          robust web applications using the MERN (MongoDB, Express.js, React,
          Node.js) stack along with expertise in Next.js. I will collaborate
          with cross-functional teams to deliver high-quality software
          solutions, ensuring an exceptional user experience.
        </p>
        <ol>
          <li>
            1. Develop and maintain web applications using the MERN stack and
            Next.js.
          </li>
          <li>
            2. Collaborate with cross-functional teams to define, design, and
            ship new features.
          </li>
          <li>3. Write efficient, reusable, and testable code.</li>
          <li>4. Implement and maintain high-performance APIs.</li>
          <li> 5. Optimize applications for maximum speed and scalability.</li>
          <li>
            6. Stay up-to-date with industry best practices and technologies.
          </li>
          <li>7. Troubleshoot and debug issues, and perform code reviews.</li>
        </ol>
      </div>
    </>
  );
}
