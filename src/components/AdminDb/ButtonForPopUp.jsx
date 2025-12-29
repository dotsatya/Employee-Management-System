import React from "react";
import { useState } from "react";
import PopUpAllTaskStatus from "./PopUpAllTaskStatus";

const ButtonForPopUp = ({ employee }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div key={employee.id} className="lg:px-3  sm:pl-6 py-1.5 my-2">
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setShowPopup(true);
        }}
        className="
        w-9 h-9
        inline-flex items-center justify-center
        rounded-full
        bg-indigo-500/10 text-indigo-600
        hover:bg-indigo-500/20
        dark:bg-indigo-400/10 dark:text-indigo-400
        dark:hover:bg-indigo-400/20
        transition
      "
        aria-label="Open employee tasks"
      >
        →
      </button>

      {/* BACKDROP + POPUP */}
      {showPopup && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowPopup(false)}
          />
          <PopUpAllTaskStatus
            employee={employee}
            onClose={() => setShowPopup(false)}
          />
        </>
      )}
    </div>
  );
};

export default ButtonForPopUp;
