function Project() {
  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Project 1 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/736x/9f/a9/d5/9fa9d524aa862ea556112210bb03a87e.jpg"
            alt="Project 1"
          />
          {/* Optional Button */}
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project One</button> */}
        </div>

        {/* Project 2 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/1200x/b5/d2/92/b5d292e09f5fd257403d86b36e03fb0c.jpg"
            alt="Project 2"
          />
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project Two</button> */}
        </div>

        {/* Project 3 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/1200x/74/4f/26/744f26f04411a387f89bf0ef63a29009.jpg"
            alt="Project 3"
          />
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project Three</button> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
