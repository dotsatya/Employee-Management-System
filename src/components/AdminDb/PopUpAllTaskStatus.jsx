import React from "react";

const EmployeeTasksPopup = ({ employee, onClose }) => {
  if (!employee) return null;
  const tasks = employee.tasks;

  // ------------------------------for date format------------------------------
  // const date = new Date(task.date);
  // const day = date.getDate();
  // const month = date.toLocaleString("en-GB", { month: "long" });
  // const year = date.getFullYear();
  // const getOrdinal = (n) => {
  //   if (n > 3 && n < 21) return "th";
  //   switch (n % 10) {
  //     case 1:
  //       return "st";
  //     case 2:
  //       return "nd";
  //     case 3:
  //       return "rd";
  //     default:
  //       return "th";
  //   }
  // };
  // const formattedDate = `${day}${getOrdinal(day)} ${month}, ${year}`;
  // ------------------------------for date format------------------------------

  const getStatusStyle = (task) => {
    if (task.status === "completed")
      return "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400";
    if (task.status === "failed")
      return "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400";
    if (task.status === "active")
      return "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400";
    return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* MODAL */}
        <div
          className="
          relative w-full max-w-3xl
          rounded-3xl
          bg-white/80 dark:bg-slate-900/80
          backdrop-blur-2xl
          border border-white/30 dark:border-slate-700/50
          shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)]
          p-6 sm:p-8
          animate-scaleIn
        "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
            absolute top-4 right-4
            w-9 h-9 rounded-full
            flex items-center justify-center
            bg-black/5 hover:bg-black/10
            dark:bg-white/10 dark:hover:bg-white/20
            text-gray-600 dark:text-gray-300
            transition
          "
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Employee ID : {employee.id}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {employee.name}
            </h2>
          </div>

          {/* TASK LIST */}
          <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
            {tasks.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No tasks assigned
              </p>
            )}

            {tasks.map((task, index) => (
              <div
                key={task.id || index}
                className="
                flex gap-4 items-start
                rounded-2xl
                bg-black/5 dark:bg-white/5
                p-4
              "
              >
                {/* NUMBER */}
                <div
                  className="
                min-w-9 h-9
                flex items-center justify-center
                rounded-xl
                font-bold
                bg-indigo-100 text-indigo-600
                dark:bg-indigo-500/20 dark:text-indigo-400
              "
                >
                  {index + 1}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {task.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between gap-4 text-sm">
                    {/* DATE */}
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <span className="text-base">📅</span>
                      {task.date}
                    </span>

                    {/* STATUS */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle(
                        task
                      )}`}
                    >
                      {task.status === "completed"
                        ? "Completed"
                        : task.status === "failed"
                        ? "Failed"
                        : task.status === "active"
                        ? "Active"
                        : "New"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="
              px-5 py-2.5 rounded-xl
              text-sm font-semibold
              bg-gray-200/80 text-gray-800
              hover:bg-gray-300
              dark:bg-slate-800 dark:text-gray-200
              dark:hover:bg-slate-700
              transition
            "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTasksPopup;
