import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/contact";

function Nar() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <div></div>;
      case "About":
        return (
          <div>
            <About />
          </div>
        );
      case "Contact":
        return (
          <div>
            <Contact />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white px-4 py-4 flex justify-end flex-wrap gap-4">
        {["Home", "About", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium transition-colors duration-200 ${
              activeTab === tab ? "text-white" : "text-gray-400"
            } hover:text-white`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="flex-1 px-4 py-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Nar;
