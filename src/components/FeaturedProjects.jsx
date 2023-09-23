import React from 'react';

const projects = [
  {
    title: "Sample Project 1",
    description: "This is a description for Sample Project 1.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/sample1",
    external: "https://sampleproject1.com",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Sample Project 2",
    description: "This is a description for Sample Project 2.",
    tech: ["Vue", "Firebase"],
    github: "https://github.com/sample2",
    external: "https://sampleproject2.com",
    image: "https://via.placeholder.com/400x300"
  }
];

const Featured = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-10">Some Things I’ve Built</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-10">
          <a href={project.external} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded shadow-lg" />
          </a>
          <h3 className="text-xl font-bold mt-5">
            <a href={project.external} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <p className="mt-2">{project.description}</p>
          <ul className="mt-4">
            {project.tech.map((tech, i) => (
              <li key={i} className="inline-block bg-gray-200 rounded px-2 py-1 mr-2 text-sm">{tech}</li>
            ))}
          </ul>
          <div className="mt-5">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-500 hover:underline">GitHub</a>
            <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">External</a>
          </div>
        </div>
      ))}
      <a href="/archive" className="text-blue-500 hover:underline">View Archive</a>
    </div>
  );
};

export default Featured;
