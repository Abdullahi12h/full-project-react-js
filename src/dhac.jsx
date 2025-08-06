function Dhac() {
  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Image 1 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/736x/99/11/39/9911393358c168e730d070eaa9df90d4.jpg"
            alt="Project 1"
          />
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project One</button> */}
        </div>

        {/* Image 2 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/736x/80/22/50/8022506379cd94c43b22225c71344f76.jpg"
            alt="Project 2"
          />
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project Two</button> */}
        </div>

        {/* Image 3 */}
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://i.pinimg.com/736x/c3/a5/92/c3a5926c0d0c59bb94c19100937fd584.jpg"
            alt="Project 3"
          />
          {/* <button className="bg-blue-500 mt-2 w-full border-2 rounded-lg text-white h-10">Project Three</button> */}
        </div>
      </div>
    </div>
  );
}

export default Dhac;
