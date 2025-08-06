import { useState } from "react";
import Project from "./project";
import Dhac from "./dhac";

function Xaflada() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 1, name: "Even 1", link: "https://example.com/project1" },
    { id: 2, name: "Even 2", link: "https://example.com/project2" },
    { id: 3, name: "Even 3", link: "https://example.com/project3" },
    { id: 4, name: "Even 4", link: "https://example.com/project4" },
    { id: 5, name: "Even 5", link: "https://example.com/project5" },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-10 bg-gray-100 text-center">
      <Dhac />
      <div className="max-w-6xl mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 block"
            >
              <h3 className="text-lg font-semibold">{project.name}</h3>
            </a>
          ))}
        </div>

        {/* Show More / Less Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          {showAll ? "Show Less" : "See More Projects"}
        </button>
      </div>
    </section>
  );
}

export default Xaflada;
