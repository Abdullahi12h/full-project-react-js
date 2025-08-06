import { useState } from "react";
import Project from "./project";
 function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 1, name: "Project 1", link: "https://example.com/project1" },
    { id: 2, name: "Project 2", link: "https://example.com/project2" },
    { id: 3, name: "Project 3", link: "https://example.com/project3" },
    { id: 4, name: "Project 4", link: "https://example.com/project4" },
    { id: 5, name: "Project 5", link: "https://example.com/project5" },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-10 bg-gray-100 text-center">
      <Project/>
      {/* <h2 className="text-2xl font-bold mb-6">Projects</h2> */} <br />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {displayedProjects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white shadow p-4 rounded hover:shadow-lg"
          >
            {project.name}
          </a>
        ))}
      </div>
      <button 
        onClick={() => setShowAll(!showAll)} 
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        {showAll ? "Show Less" : "See More Projects"}

      </button>
    </section>
  )
}
export default Projects 
